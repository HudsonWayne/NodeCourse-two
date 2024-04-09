// const http = require('http');
// const routes = require('./routes')

// console.log(routes.someText);

// const server = http.createServer(routes, handler);
// server.listen(2000); 



const http = require('http');

const express = require('express')

const app = express();

app.use((req, res, next) => {
  console.log('In middleware!');
  next();
});

app.use((req, res, next) => {
  console.log('In another middleware!');
  //......
});

const server = http.createServer(app);

server.listen(2000);
