const { books } = require('../models/bookModel');

module.exports = {
  getAllBooks: (req, res) => {
    res.json(books);
  },

  getBookById: (req, res) => {
    const id = req.params.id;
    const book = books.find(b => b.id === id);

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.json(book);
  }
};
