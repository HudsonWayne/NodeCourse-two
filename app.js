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
const bodyParser = require('body-parser'); // Assuming Express version below 4.16

const express = require('express');

// Create the Express app instance before using it in middleware
const app = express();

// Set up middleware for parsing form data (if using older Express versions)
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware that always runs
app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

// Route for displaying the product form
app.use('/add-product', (req, res, next) => {
  console.log('In another middleware');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// Route for handling product submission (assuming you have logic for saving the product)
app.use('/product', (req, res, next) => {
  const { title } = req.body; // Destructure title from request body (assuming the name is "title")
  console.log(`Product title submitted: ${title}`); // Log the submitted title
  res.redirect('/'); // Redirect back to the home page
});

// Route for the home page
app.use('/', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from Node</h1>');
});

// Create and start the server
const server = http.createServer(app);

server.listen(7000)

// server.listen(7000, (err) => { // Added error handling
//   if (err) {
//     console.error('Error starting server:', err);
//   } else {
//     console.log('Server listening on port 7000');
//   }
// });
