const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();
const products = [];

// Route for displaying the product form
router.get('/add-product', (req, res, next) => {
   
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
  
  // Route for handling product submission (assuming you have logic for saving the product)
   router.post('/add-product', (req, res, next) => {
     products.push({title:req.body.title});
     res.redirect('/');
  
   });

exports.routes = router;
exports.products = products;
