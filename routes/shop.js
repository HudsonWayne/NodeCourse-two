const path = require('path');

const express = require('express');

const router = express.Router();

// Route for the home page
router.get('/', (req, res, next) => {
    
    res.sendFile(path.join());
  });

  module.exports = router;