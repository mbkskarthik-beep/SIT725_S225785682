document.addEventListener("DOMContentLoaded", () => {
  const loadBooksBtn = document.getElementById("loadBooksBtn");
  const bookList = document.getElementById("bookList");
  const bookDetails = document.getElementById("bookDetails");

  
  function getPrice(book) {
    if (!book.price) return "0.00";


    if (typeof book.price === "object" && "$numberDecimal" in book.price) {
      return parseFloat(book.price.$numberDecimal).toFixed(2);
    }

    if (typeof book.price === "number") {
      return book.price.toFixed(2);
    }

   
    if (typeof book.price === "string") {
      return parseFloat(book.price).toFixed(2);
    }

    return "0.00";
  }

  
  loadBooksBtn.addEventListener("click", async () => {
    bookDetails.innerHTML = "";
    bookList.innerHTML = "<p>Loading...</p>";

    const response = await fetch("/api/books");
    const books = await response.json();

    bookList.innerHTML = "";

    books.forEach(book => {
      const price = getPrice(book);

      const item = document.createElement("div");
      item.textContent = `${book.title} ${price} AUD`;

      item.onclick = () => loadBookDetails(book.id);

      bookList.appendChild(item);
    });
  });

  async function loadBookDetails(id) {
    const response = await fetch(`/api/books/${id}`);
    const book = await response.json();

    const price = getPrice(book);

    bookDetails.innerHTML = `
      <h3>Title: ${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Year:</strong> ${book.year}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Summary:</strong> ${book.summary}</p>
      <p><strong>Price (AUD):</strong> ${price}</p>
    `;
  }
});
