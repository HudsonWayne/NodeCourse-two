// const http = require('http');
// const routes = require('./routes')

// console.log(routes.someText);

// const server = http.createServer(routes, handler);
// server.listen(2000); 
const express = require('express');
const app = express();



const http = require('http');

;

app.use('/',(req, res, next) => {
  console.log('In another middleware!');
  res.send('Hello World from Express');
  //......
});

app.use('/add-product',(req, res, next) => {
  console.log('This always runs!');
  res.send('<form action="/product" method="POST"><input type="text" name= "title"><button type="submit">Add Product</form>');
  //......
});
app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})



const server = http.createServer(app);

server.listen(1100);
