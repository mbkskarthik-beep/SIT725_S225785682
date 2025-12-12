const Book = require('../models/bookModel');

exports.getAllBooks = async () => {
  const docs = await Book.find({}, '-__v').lean();
  return docs.map(convertPrice);
};

exports.getBookById = async (id) => {
  const doc = await Book.findOne({ id }, '-__v').lean();
  return doc ? convertPrice(doc) : null;
};

function convertPrice(doc) {
  if (!doc) return doc;
  if (doc.price !== undefined && doc.price !== null) {
    try {
      const s = typeof doc.price === 'object' && doc.price.toString ? doc.price.toString() : String(doc.price);
      doc.price = parseFloat(s);
    } catch (e) {
    }
  }
  return doc;
}
 