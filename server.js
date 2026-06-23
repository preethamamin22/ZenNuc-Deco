const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/upload') {
    let body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
      let dataUrl = Buffer.concat(body).toString();
      let base64 = dataUrl.split(',')[1];
      fs.writeFileSync('zennuc_product.png', Buffer.from(base64, 'base64'));
      res.writeHead(200);
      res.end('File saved successfully!');
      console.log("File saved: zennuc_product.png");
      process.exit(0);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8081, () => {
  console.log('Upload server listening on port 8081');
});
