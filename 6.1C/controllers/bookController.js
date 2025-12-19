
const bookService = require('../services/bookService');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (err) {
    console.error('getAllBooks error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    console.error('getBookById error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
