const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

// GET /api/books
router.get('/', Controllers.bookController.getAllBooks);

// GET /api/books/:id
router.get('/:id', Controllers.bookController.getBookById);

module.exports = router;
