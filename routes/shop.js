const path = require('path');

const express = require('express');

const rootDir = require('../utils/path')
const adminData = require('./admin')

const router = express.Router();

// Route for the home page
router.get('/', (req, res, next) => {
    console.log('shop.js',adminData.products); 
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  });

  module.exports = router;