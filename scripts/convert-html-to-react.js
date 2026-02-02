const fs = require('fs');
const path = require('path');

const srcDir = 'D:/Garaze';
const outDir = path.join(__dirname, '..', 'src', 'pages');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function toComponentName(filename) {
    const base = path.basename(filename, '.html');
    if (base.toLowerCase() === 'index') return 'Home';
    return base.split(/[^a-zA-Z0-9]+/).map(s => s ? s.charAt(0).toUpperCase() + s.slice(1) : '').join('');
}

function toRoutePath(filename) {
    const base = path.basename(filename, '.html');
    if (base.toLowerCase() === 'index') return '/';
    return '/' + base;
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const full = path.join(srcDir, file);
    const raw = fs.readFileSync(full, 'utf8');
    const m = /<body[^>]*>([\s\S]*)<\/body>/i.exec(raw);
    const body = m ? m[1] : raw;

    // Replace internal html links (href="foo.html") -> href="/foo"
    const replaced = body.replace(/href\s*=\s*"([^":#>]+?\.html)"/gi, (m, href) => {
        const base = path.basename(href, '.html');
        const route = base.toLowerCase() === 'index' ? '/' : '/' + base;
        return `href=\"${route}\"`;
    });

    // Escape backticks
    const escaped = replaced.replace(/`/g, '\\`');

    const compName = toComponentName(file);
    const outPath = path.join(outDir, compName + '.jsx');

    const content = "import React, { useEffect } from 'react';\n" +
        "import { initPlugins } from '../utils/initPlugins';\n\n" +
        "export default function " + compName + "(){\n" +
        "  useEffect(()=>{ if (typeof initPlugins === 'function') { initPlugins(); } window.scrollTo(0,0); }, []);\n" +
        "  return (\n" +
        "    <div class=\"page " + compName.toLowerCase() + "\" dangerouslySetInnerHTML={{__html: `\n" + escaped + "\n`}} />\n" +
        "  );\n" +
        "}\n";

    fs.writeFileSync(outPath, content, 'utf8');
    console.log('Wrote', outPath);
});

// generate index of routes
const routes = files.map(f => {
    const name = toComponentName(f);
    const p = toRoutePath(f);
    return `import ${name} from './pages/${name}.jsx';\n`;
}).join('');

// create routes file in src/pages/routeList.jsx
const routesFile = path.join(__dirname, '..', 'src', 'pages', 'routes.generated.jsx');
const routeEntries = files.map(f => {
    const name = toComponentName(f);
    const p = toRoutePath(f);
    return `  { path: '${p}', component: ${name} },`;
}).join('\n');

const routesContent = `${files.map(f => `import ${toComponentName(f)} from './${toComponentName(f)}.jsx';`).join('\n')}

export const routes = [
${routeEntries}
];
`;

fs.writeFileSync(routesFile, routesContent, 'utf8');
console.log('Wrote routes file', routesFile);
