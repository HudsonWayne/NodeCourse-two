const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

// Route for displaying the product form
router.get('/add-product', (req, res, next) => {
   
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
  
  // Route for handling product submission (assuming you have logic for saving the product)
   router.post('/add-product', (req, res, next) => {
     console.log(req.body);
     res.redirect('/');
  
   });

module.exports = router;
