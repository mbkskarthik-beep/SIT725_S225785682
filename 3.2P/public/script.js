let allMovies = [];

const getMovies = () => {
    fetch('/api/movies')
        .then(res => res.json())
        .then(data => {
            allMovies = data;
            updateCards(allMovies);
        })
        .catch(err => console.error("Fetch Error:", err));
}

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
                <div class="extra-info" id="extra-${movie.id}">
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
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("MovieShelf Loaded");
    getMovies();
    setupNavScrolling()
    setupAboutBox()
});
