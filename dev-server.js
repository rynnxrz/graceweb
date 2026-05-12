const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 8080;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.woff2':'font/woff2',
  '.woff': 'font/woff',
  '.ttf':  'font/ttf',
  '.ico':  'image/x-icon',
  '.mp4':  'video/mp4',
  '.webm': 'video/webm',
};

function safePath(rel) {
  const resolved = path.resolve(ROOT, rel);
  if (!resolved.startsWith(ROOT + path.sep) && resolved !== ROOT) return null;
  return resolved;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function parseMultipart(buf, boundary) {
  const sep = Buffer.from('--' + boundary);
  const parts = [];
  let start = 0;
  while (true) {
    const idx = buf.indexOf(sep, start);
    if (idx === -1) break;
    if (start > 0) {
      const chunk = buf.slice(start, idx);
      const headerEnd = chunk.indexOf('\r\n\r\n');
      if (headerEnd !== -1) {
        const header = chunk.slice(0, headerEnd).toString();
        let body = chunk.slice(headerEnd + 4);
        if (body.length >= 2 && body[body.length - 2] === 0x0d && body[body.length - 1] === 0x0a)
          body = body.slice(0, -2);
        const nameMatch = header.match(/name="([^"]+)"/);
        const fileMatch = header.match(/filename="([^"]+)"/);
        parts.push({
          name: nameMatch ? nameMatch[1] : '',
          filename: fileMatch ? fileMatch[1] : null,
          data: body,
          header,
        });
      }
    }
    start = idx + sep.length;
    if (buf[start] === 0x2d && buf[start + 1] === 0x2d) break; // --
    if (buf[start] === 0x0d) start += 2; // \r\n
  }
  return parts;
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // --- API: save JS file ---
  if (req.method === 'POST' && req.url === '/api/save-js') {
    try {
      const body = JSON.parse((await readBody(req)).toString());
      const allowed = ['project-detail.js', 'network.js', 'specimens.js'];
      if (!allowed.includes(body.filename)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Filename not allowed' }));
        return;
      }
      const target = safePath(body.filename);
      if (!target) { res.writeHead(400); res.end('Invalid path'); return; }
      fs.writeFileSync(target, body.content, 'utf8');
      console.log(`  ✓ saved ${body.filename}`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // --- API: save image ---
  if (req.method === 'POST' && req.url === '/api/save-image') {
    try {
      const buf = await readBody(req);
      const ct = req.headers['content-type'] || '';
      const boundaryMatch = ct.match(/boundary=(.+)/);
      if (!boundaryMatch) { res.writeHead(400); res.end('Missing boundary'); return; }

      const parts = parseMultipart(buf, boundaryMatch[1]);
      const filePart = parts.find(p => p.name === 'file');
      const pathPart = parts.find(p => p.name === 'path');
      if (!filePart || !pathPart) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing file or path' }));
        return;
      }

      const relPath = pathPart.data.toString().trim();
      const target = safePath(relPath);
      if (!target) { res.writeHead(400); res.end('Invalid path'); return; }

      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, filePart.data);
      console.log(`  ✓ saved image → ${relPath} (${(filePart.data.length / 1024).toFixed(1)} KB)`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true, path: relPath, size: filePart.data.length }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // --- Static file serving ---
  if (req.method !== 'GET') { res.writeHead(405); res.end(); return; }

  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = safePath(urlPath.slice(1));
  if (!filePath) { res.writeHead(403); res.end(); return; }

  try {
    let stat;
    try { stat = fs.statSync(filePath); } catch {
      // try appending .html for extensionless URLs
      const withHtml = filePath + '.html';
      if (fs.existsSync(withHtml)) {
        const content = fs.readFileSync(withHtml);
        res.writeHead(200, { 'Content-Type': 'text/html', 'Cache-Control': 'no-cache' });
        res.end(content);
        return;
      }
      res.writeHead(404); res.end('Not found'); return;
    }
    if (stat.isDirectory()) {
      const index = path.join(filePath, 'index.html');
      if (fs.existsSync(index)) {
        const content = fs.readFileSync(index);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
        return;
      }
      res.writeHead(404); res.end('Not found'); return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': mime, 'Cache-Control': 'no-cache' });
    res.end(content);
  } catch {
    res.writeHead(404); res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`\n  graceweb dev server`);
  console.log(`  http://localhost:${PORT}\n`);
});
