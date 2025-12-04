let allMovies = [];


const getMovies = () => {
    fetch('/api/movies')
        .then(res => res.json())
        .then(data => {
            allMovies = data;
            updateCards(allMovies);
        })
        .catch(err => console.error("Fetch Error:", err));
};


const updateCards = (movies) => {
    const section = document.getElementById('card-section');
    section.innerHTML = "";

    movies.forEach(movie => {
        section.innerHTML += `
        <div class="col s12 m6 l3">
            <div class="card hoverable">
                <div class="card-image poster" data-id="${movie.id}">
                    <img src="${movie.poster}" alt="${movie.title}">
                    <span class="card-title">${movie.title}</span>
                </div>
                <div class="card-content">
                    <p><strong>Genre:</strong> ${movie.genre}</p>
                </div>
                <div class="extra-info" id="extra-${movie.id}" style="display:none;">
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Duration:</strong> ${movie.duration} min</p>
                    <p>${movie.description}</p>
                </div>
            </div>
        </div>`;
    });

    
    $('.poster').off().on('click', function () {
        const id = $(this).data('id');
        $(`#extra-${id}`).slideToggle(250);
    });
};


const addMovie = (movie) => {
    fetch("/api/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
    })
        .then(res => res.json())
        .then(() => {
            M.toast({ html: "Movie Added!" });

            $('#addMovieModal').modal('close');
            document.getElementById("movieForm").reset();

            getMovies(); // refresh movie cards
        })
        .catch(err => console.error("Add Movie Error:", err));
};

document.addEventListener("DOMContentLoaded", function () {
    console.log("MovieShelf Loaded");


    $('.modal').modal();

    getMovies();

   
    document.getElementById("addMovieBtn").addEventListener("click", () => {
        $('#addMovieModal').modal('open');
    });

    // Submit Add Movie form
    document.getElementById("movieForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const movie = {
            
            title: document.getElementById("title").value,
            poster: document.getElementById("poster").value,
            genre: document.getElementById("genre").value,
            director: document.getElementById("director").value,
            duration: document.getElementById("duration").value,
            description: document.getElementById("description").value
        };

        addMovie(movie);
    });
});
