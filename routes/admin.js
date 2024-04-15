const express = require('express');

const router = express.Router();

// Route for displaying the product form
router.get('/add-product', (req, res, next) => {
    console.log('In another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  });
  
  // Route for handling product submission (assuming you have logic for saving the product)
   router.use('/product', (req, res, next) => {
     console.log(req.body);
     res.redirect('/');
  
   });

module.exports = router;
