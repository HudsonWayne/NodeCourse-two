// const http = require('http');
// const routes = require('./routes')

// console.log(routes.someText);

// const server = http.createServer(routes, handler);
// server.listen(2000); 



const http = require('http');
const routes = require('./routes');



console.log(routes.someText);  // Assuming 'someText' is defined in routes.js

const server = http.createServer(routes. handler);
server.listen(2000);
