
const express = require('express');
const router = express.Router();
const controllers = require('../controllers');


router.get('/books', controllers.bookController.getAllBooks);


router.get('/books/:id', controllers.bookController.getBookById);

router.get('/integrity-check42', (req, res) => res.status(204).send());

module.exports = router;
