const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

// Ensure public/uploads exists
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// Simple logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Serve public folder so uploaded files are accessible via http://host:PORT/uploads/...
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_DIR);
    },
    filename: function (req, file, cb) {
        const safeName = Date.now() + '-' + file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '_');
        cb(null, safeName);
    }
});
const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.json({ url });
});

app.post('/api/chat', async (req, res) => {
    try {
        const { text = 'What is in this image?', image_urls = [] } = req.body;
        if (!process.env.OPENROUTER_API_KEY) {
            return res.status(500).json({ error: 'OPENROUTER_API_KEY not configured on server' });
        }

        const messages = [
            {
                role: 'user',
                content: [
                    { type: 'text', text }
                ]
            }
        ];

        for (const url of image_urls) {
            messages[0].content.push({ type: 'image_url', image_url: { url } });
        }

        const body = {
            model: 'allenai/molmo-2-8b:free',
            messages
        };

        const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`
            },
            body: JSON.stringify(body)
        });

        const data = await resp.json();
        return res.json(data);
    } catch (err) {
        console.error('chat error', err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});