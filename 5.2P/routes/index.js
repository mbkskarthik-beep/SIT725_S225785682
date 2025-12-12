
const express = require('express');
const router = express.Router();

router.use('/books', require('./books.routes'));

module.exports = router;
