const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <h1>Hello from Docker!</h1>
    <p>Lab 2 - Containerization & Kubernetes Orchestration</p>
    <p>Container is running successfully.</p>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});