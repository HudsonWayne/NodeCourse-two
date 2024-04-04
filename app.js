// const http = require('http');
// const routes = require('./routes')

// console.log(routes.someText);

// const server = http.createServer(routes, handler);
// server.listen(2000); 



const http = require('http');
const routes = require('./routes');

// Define the handler function
function handler(req, res) {
  // Handle incoming requests here
  // Example:
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
}

console.log(routes.someText);  // Assuming 'someText' is defined in routes.js

const server = http.createServer(routes, handler);
server.listen(2000);
