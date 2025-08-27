const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Dummy student data
const students = [
  { id: 1, name: "Amit", age: 20 },
  { id: 2, name: "Priya", age: 22 },
  { id: 3, name: "Rahul", age: 21 }
];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(students));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`API running at http://${hostname}:${port}/`);
});
