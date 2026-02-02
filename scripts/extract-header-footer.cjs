const fs = require('fs');
const path = require('path');
const src = 'D:/Garaze/index.html';
const outDir = path.join(__dirname, '..', 'src', 'components');
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const raw = fs.readFileSync(src, 'utf8');
const getBlock = (start, end) => {
  const re = new RegExp(start + '([\s\S]*?)' + end,'i');
  const m = re.exec(raw);
  return m ? m[0] : '';
}
let headerBlock = getBlock('<!--\s*preloader\s*-->', '<!--\s*End Mobile Menu\s*-->');
let footerBlock = getBlock('<!--\s*main-footer\s*-->', '<!--\s*main-footer end\s*-->');
// Fallback: if markers not found, try common <header> and <footer> tags
if(!headerBlock){
  const m = raw.match(/<header[\s\S]*?<\/header>/i);
  if(m) headerBlock = m[0];
}
if(!footerBlock){
  const m = raw.match(/<footer[\s\S]*?<\/footer>/i);
  if(m) footerBlock = m[0];
}
// Normalize internal .html links to SPA routes
headerBlock = headerBlock.replace(/href\s*=\s*"([^\":#>]+?)\.html"/gi, (m, p)=>{
  if(p.toLowerCase()==='index') return 'href="/"';
  return `href="/${p}"`;
});
footerBlock = footerBlock.replace(/href\s*=\s*"([^\":#>]+?)\.html"/gi, (m, p)=>{
  if(p.toLowerCase()==='index') return 'href="/"';
  return `href="/${p}"`;
});

const headerComponent = `import React from 'react';

export default function Header(){
  return (
    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify('\n' + headerBlock + '\n')} }} />
  );
}
`;
const footerComponent = `import React from 'react';

export default function Footer(){
  return (
    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify('\n' + footerBlock + '\n')} }} />
  );
}
`;
fs.writeFileSync(path.join(outDir,'Header.jsx'), headerComponent,'utf8');
fs.writeFileSync(path.join(outDir,'Footer.jsx'), footerComponent,'utf8');
console.log('Wrote Header.jsx and Footer.jsx');
