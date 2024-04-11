// const http = require('http');
// const routes = require('./routes')

// console.log(routes.someText);

// const server = http.createServer(routes, handler);
// server.listen(2000); 


// const express = require('express');
// const bodyParser = require('body-parser');

// // Create the app instance before using it
// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', (req, res, next) => {
//   console.log('In another middleware!');
//   res.send('Hello World from Express');
//   // ......
// });

// app.use('/add-product', (req, res, next) => {
//   console.log('This always runs!');
//   res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
//   // ......
// });

// app.use('/product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/');
// })

// // Require the http module
// const http = require('http');

// // Create the server using http.createServer(app)
// const server = http.createServer(app);

// server.listen(8080);

const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) =>{
  console.log('This always runs!');
  next();
})

app.use('/add-product',(req, res, next) =>{
  console.log('In another middleware');
  res.send('<form action="/product" method="Post"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

app.use('/product', (req, res, next) =>{

    console.log(res.body); 
    res.redirect('/');
})


app.use('/', (req, res, next) =>{
  console.log('In another middleware');
  res.send('<h1>Hello from Node</h1>');
})


const server = http.createServer(app);

server.listen(7000)