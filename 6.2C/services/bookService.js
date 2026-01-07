

const books = [
  { id: "b1", title: "Test Book 1", author: "Author A" },
  { id: "b2", title: "Test Book 2", author: "Author B" }
];

const getAllBooks = async () => {
  return books;
};

const getBookById = async (id) => {
  return books.find(book => book.id === id) || null;
};

module.exports = {
  getAllBooks,
  getBookById
};
