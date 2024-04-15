const express = require('express');

const router = express.Router();

// Route for the home page
router.get('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Node</h1>');
  });

  module.exports = router;