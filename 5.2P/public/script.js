window.onload = function() {
    fetch("/api/books")
        .then(response => response.json())
        .then(books => {
            const list = document.getElementById("books-list");

            books.forEach(book => {
                const li = document.createElement("li");
                li.textContent = `${book.title} — ${book.author}`;
                list.appendChild(li);
            });
        })
        .catch(err => console.error("Failed to load books:", err));
};

