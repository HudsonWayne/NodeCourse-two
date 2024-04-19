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
const path = require('path')
const http = require('http');

const bodyParser = require('body-parser'); // Assuming Express version below 4.16

const express = require('express');

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

// Create the Express app instance before using it in middleware
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');



// Set up middleware for parsing form data (if using older Express versions)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin ',adminData.routes);
app.use(shopRoutes);


app.use((req,res, next)=>{
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


// Middleware that always runs
app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});


// Create and start the server
const server = http.createServer(app);

server.listen(7000)

