const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        display: grid;
        place-items: center;
        min-height: 100vh;
        background: #f4f7fb;
        color: #1f2937;
      }
      main {
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Hello World!</h1>
      <p>Your basic Node.js website is running.</p>
    </main>
  </body>
</html>`);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
