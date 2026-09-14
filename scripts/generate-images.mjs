import http from 'http';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const htmlContent = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background: transparent; margin: 0; padding: 0;">
<canvas id="c" width="600" height="700"></canvas>
<script>
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

const items = [
  { name: 'iphone-11.webp', model: '11', color: '#B39DDB', accent: '#7E57C2', dualCamera: true },
  { name: 'iphone-12.webp', model: '12', color: '#5C6BC0', accent: '#3F51B5', flatEdges: true, dualCamera: true },
  { name: 'iphone-13.webp', model: '13', color: '#EC407A', accent: '#D81B60', flatEdges: true, diagonalCam: true },
  { name: 'iphone-14.webp', model: '14', color: '#AB47BC', accent: '#8E24AA', flatEdges: true, diagonalCam: true },
  { name: 'iphone-15.webp', model: '15', color: '#26A69A', accent: '#00897B', dynamicIsland: true, frostedBack: true },
  { name: 'iphone-16.webp', model: '16', color: '#6624D8', accent: '#4A15A8', dynamicIsland: true, actionBtn: true, vertCam: true },
  { name: 'iphone-17.webp', model: '17', color: '#FF3C91', accent: '#C2185B', dynamicIsland: true, titaniumSlim: true },
  { name: 'iphone-18.webp', model: '18', color: '#FF9B32', accent: '#E65100', dynamicIsland: true, holographic: true },
  { name: 'hero-iphone.webp', model: '16 Pro Max', color: '#6624D8', accent: '#FF3C91', isHero: true },
  { name: 'ipad.webp', type: 'ipad' },
  { name: 'apple-watch.webp', type: 'watch' },
  { name: 'acessorios.webp', type: 'accessories' }
];

function drawPhone(item) {
  ctx.clearRect(0, 0, 600, 700);
  ctx.save();
  
  // Center and tilt slightly for Apple-like product angle
  ctx.translate(300, 350);
  const tilt = item.isHero ? -0.08 : -0.05;
  ctx.rotate(tilt);

  // Outer shadow
  ctx.shadowColor = 'rgba(102, 36, 216, 0.25)';
  ctx.shadowBlur = 35;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 20;

  const w = item.isHero ? 280 : 250;
  const h = item.isHero ? 540 : 490;
  const r = 44;

  // Phone chassis border (titanium/metallic edge)
  const chassisGrad = ctx.createLinearGradient(-w/2, -h/2, w/2, h/2);
  chassisGrad.addColorStop(0, '#FFFFFF');
  chassisGrad.addColorStop(0.3, item.accent || '#8E24AA');
  chassisGrad.addColorStop(0.7, item.color || '#6624D8');
  chassisGrad.addColorStop(1, '#201B32');

  ctx.fillStyle = chassisGrad;
  roundRect(ctx, -w/2, -h/2, w, h, r);
  ctx.fill();

  // Reset shadow for inner elements
  ctx.shadowColor = 'transparent';

  // Back plate / Screen
  const bodyGrad = ctx.createLinearGradient(-w/2, -h/2, w/2, h/2);
  bodyGrad.addColorStop(0, item.color || '#6624D8');
  bodyGrad.addColorStop(0.5, item.accent || '#4A15A8');
  bodyGrad.addColorStop(1, '#1A1230');

  ctx.fillStyle = bodyGrad;
  roundRect(ctx, -w/2 + 6, -h/2 + 6, w - 12, h - 12, r - 4);
  ctx.fill();

  // Glossy glass reflection streak across body
  ctx.save();
  ctx.beginPath();
  roundRect(ctx, -w/2 + 6, -h/2 + 6, w - 12, h - 12, r - 4);
  ctx.clip();
  
  const glassGrad = ctx.createLinearGradient(-w/2, -h/2, w/2, h/2);
  glassGrad.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
  glassGrad.addColorStop(0.4, 'rgba(255, 255, 255, 0.08)');
  glassGrad.addColorStop(0.6, 'rgba(255, 255, 255, 0)');
  glassGrad.addColorStop(1, 'rgba(255, 255, 255, 0.15)');
  ctx.fillStyle = glassGrad;
  ctx.fill();

  // Camera Island Module on top-left back
  const camX = -w/2 + 24;
  const camY = -h/2 + 24;
  const camSize = 100;
  const camRadius = 26;

  // Island base plate with glass effect
  const islandGrad = ctx.createLinearGradient(camX, camY, camX + camSize, camY + camSize);
  islandGrad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
  islandGrad.addColorStop(1, 'rgba(20, 15, 35, 0.6)');
  ctx.fillStyle = islandGrad;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = 10;
  roundRect(ctx, camX, camY, camSize, camSize, camRadius);
  ctx.fill();
  ctx.shadowColor = 'transparent';

  // Lenses
  if (item.vertCam) {
    drawLens(camX + 32, camY + 30, 20);
    drawLens(camX + 32, camY + 70, 20);
    drawFlash(camX + 72, camY + 50, 9);
  } else if (item.diagonalCam) {
    drawLens(camX + 28, camY + 28, 20);
    drawLens(camX + 72, camY + 72, 20);
    drawFlash(camX + 72, camY + 28, 9);
  } else {
    // Pro style 3 lenses
    drawLens(camX + 30, camY + 30, 20);
    drawLens(camX + 30, camY + 72, 20);
    drawLens(camX + 70, camY + 51, 20);
    drawFlash(camX + 72, camY + 24, 7);
    drawLidar(camX + 72, camY + 78, 6);
  }

  // Apple-inspired minimalist logo in center
  ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
  drawAppleLogo(0, 15, 22);

  // Model typography badge on back
  ctx.font = '600 13px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.textAlign = 'center';
  ctx.fillText('iPhone ' + item.model, 0, h/2 - 35);
  ctx.font = '400 10px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
  ctx.fillText('Maca na Mão Edition', 0, h/2 - 20);

  ctx.restore();
  ctx.restore();
}

function drawLens(x, y, r) {
  // Lens metallic rim
  const rimGrad = ctx.createLinearGradient(x - r, y - r, x + r, y + r);
  rimGrad.addColorStop(0, '#E0E0E0');
  rimGrad.addColorStop(0.5, '#424242');
  rimGrad.addColorStop(1, '#111111');
  ctx.fillStyle = rimGrad;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();

  // Glass optic inner
  const opticGrad = ctx.createRadialGradient(x - 3, y - 3, 2, x, y, r - 3);
  opticGrad.addColorStop(0, '#311B92');
  opticGrad.addColorStop(0.6, '#0D47A1');
  opticGrad.addColorStop(1, '#050510');
  ctx.fillStyle = opticGrad;
  ctx.beginPath();
  ctx.arc(x, y, r - 3, 0, Math.PI * 2);
  ctx.fill();

  // Reflection dot
  ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
  ctx.beginPath();
  ctx.arc(x - 5, y - 5, r * 0.22, 0, Math.PI * 2);
  ctx.fill();
}

function drawFlash(x, y, r) {
  ctx.fillStyle = '#FFF8E1';
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#FFE082';
  ctx.beginPath();
  ctx.arc(x, y, r - 2, 0, Math.PI * 2);
  ctx.fill();
}

function drawLidar(x, y, r) {
  ctx.fillStyle = '#1A1829';
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function drawAppleLogo(x, y, size) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
}

function drawIPad() {
  ctx.clearRect(0, 0, 600, 700);
  ctx.save();
  ctx.translate(300, 350);
  ctx.rotate(-0.04);

  // Outer shadow
  ctx.shadowColor = 'rgba(102, 36, 216, 0.22)';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetY = 15;

  const w = 380;
  const h = 490;
  const r = 28;

  // Aluminum body
  const bodyGrad = ctx.createLinearGradient(-w/2, -h/2, w/2, h/2);
  bodyGrad.addColorStop(0, '#EDE7F6');
  bodyGrad.addColorStop(0.5, '#6624D8');
  bodyGrad.addColorStop(1, '#1A132F');
  ctx.fillStyle = bodyGrad;
  roundRect(ctx, -w/2, -h/2, w, h, r);
  ctx.fill();
  ctx.shadowColor = 'transparent';

  // Screen
  ctx.fillStyle = '#0F0C1B';
  roundRect(ctx, -w/2 + 14, -h/2 + 14, w - 28, h - 28, r - 10);
  ctx.fill();

  // Screen Wallpaper Gradient
  const screenGrad = ctx.createLinearGradient(-w/2, -h/2, w/2, h/2);
  screenGrad.addColorStop(0, '#FF3C91');
  screenGrad.addColorStop(0.5, '#6624D8');
  screenGrad.addColorStop(1, '#0870B4');
  ctx.fillStyle = screenGrad;
  roundRect(ctx, -w/2 + 18, -h/2 + 18, w - 36, h - 36, r - 12);
  ctx.fill();

  // Stylus pencil on the right edge
  ctx.fillStyle = '#FFFFFF';
  roundRect(ctx, w/2 + 8, -h/2 + 40, 10, 320, 5);
  ctx.fill();

  ctx.restore();
}

function drawWatch() {
  ctx.clearRect(0, 0, 600, 700);
  ctx.save();
  ctx.translate(300, 350);

  // Watch band (top and bottom strap)
  const strapGrad = ctx.createLinearGradient(-60, -250, 60, 250);
  strapGrad.addColorStop(0, '#6624D8');
  strapGrad.addColorStop(0.5, '#FF3C91');
  strapGrad.addColorStop(1, '#0870B4');
  ctx.fillStyle = strapGrad;
  roundRect(ctx, -60, -230, 120, 460, 30);
  ctx.fill();

  // Shadow for case
  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowBlur = 25;
  ctx.shadowOffsetY = 10;

  // Watch Case
  const w = 180;
  const h = 210;
  const r = 48;
  const caseGrad = ctx.createLinearGradient(-w/2, -h/2, w/2, h/2);
  caseGrad.addColorStop(0, '#FFFFFF');
  caseGrad.addColorStop(0.3, '#D1C4E9');
  caseGrad.addColorStop(0.8, '#311B92');
  caseGrad.addColorStop(1, '#1A1230');
  ctx.fillStyle = caseGrad;
  roundRect(ctx, -w/2, -h/2, w, h, r);
  ctx.fill();
  ctx.shadowColor = 'transparent';

  // Digital Crown button
  ctx.fillStyle = '#E0E0E0';
  roundRect(ctx, w/2, -40, 14, 45, 6);
  ctx.fill();

  // Display
  ctx.fillStyle = '#080511';
  roundRect(ctx, -w/2 + 10, -h/2 + 10, w - 20, h - 20, r - 8);
  ctx.fill();

  // Activity rings
  drawRing(0, 0, 48, '#FF3C91', 10, 0.85);
  drawRing(0, 0, 34, '#FF9B32', 10, 0.65);
  drawRing(0, 0, 20, '#0870B4', 10, 0.9);

  ctx.restore();
}

function drawRing(x, y, r, color, width, pct) {
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(x, y, r, -Math.PI/2, -Math.PI/2 + Math.PI * 2 * pct);
  ctx.stroke();
}

function drawAccessories() {
  ctx.clearRect(0, 0, 600, 700);
  ctx.save();
  ctx.translate(300, 350);

  // MagSafe Charger Disc
  ctx.shadowColor = 'rgba(102, 36, 216, 0.25)';
  ctx.shadowBlur = 20;
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(-70, -40, 75, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#F3EBFF';
  ctx.beginPath();
  ctx.arc(-70, -40, 65, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowColor = 'transparent';

  // USB-C Power Adapter
  const adapterGrad = ctx.createLinearGradient(40, 20, 170, 150);
  adapterGrad.addColorStop(0, '#FFFFFF');
  adapterGrad.addColorStop(1, '#ECEFF1');
  ctx.fillStyle = adapterGrad;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
  ctx.shadowBlur = 18;
  roundRect(ctx, 40, 10, 110, 110, 22);
  ctx.fill();
  ctx.shadowColor = 'transparent';

  // USB-C port
  ctx.fillStyle = '#90A4AE';
  roundRect(ctx, 80, 55, 30, 12, 4);
  ctx.fill();

  // Braided Violet Cable curve
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#6624D8';
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(-70, 35);
  ctx.bezierCurveTo(-70, 150, 40, 180, 95, 120);
  ctx.stroke();

  // Subtle MagSafe Ring
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#FF3C91';
  ctx.beginPath();
  ctx.arc(-70, -40, 40, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

async function renderAll() {
  for (const item of items) {
    if (item.type === 'ipad') {
      drawIPad();
    } else if (item.type === 'watch') {
      drawWatch();
    } else if (item.type === 'accessories') {
      drawAccessories();
    } else {
      drawPhone(item);
    }
    const dataUrl = canvas.toDataURL('image/webp', 0.92);
    await fetch('/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: item.name, dataUrl })
    });
  }
  await fetch('/done', { method: 'POST' });
}

setTimeout(renderAll, 100);
</script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  } else if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { filename, dataUrl } = JSON.parse(body);
      const base64Data = dataUrl.replace(/^data:image\/webp;base64,/, '');
      const filePath = path.join(outputDir, filename);
      fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
      console.log(`Saved ${filename} (${fs.statSync(filePath).size} bytes)`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    });
  } else if (req.method === 'POST' && req.url === '/done') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    console.log('All images generated successfully!');
    setTimeout(() => {
      server.close();
      process.exit(0);
    }, 500);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3333, () => {
  console.log('Image generation server listening on port 3333...');
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw http://localhost:3333`;
  exec(cmd, (err) => {
    if (err) {
      console.error('Edge execution error:', err);
    }
  });
});
