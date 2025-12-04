const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json()); 
app.use(express.static(__dirname + '/public'));

let movies = [
    {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        poster: "images/m1.jpg",
        description: "A mind-bending thriller exploring dreams and reality.",
        duration: 148,
        genre: "Sci-Fi"
    },
    {
        id: 2,
        title: "Interstellar",
        director: "Christopher Nolan",
        poster: "images/m2.jpg",
        description: "A journey through space to save humanity.",
        duration: 169,
        genre: "Sci-Fi"
    },
    {
        id: 3,
        title: "Dark Knight",
        director: "Christopher Nolan",
        poster: "images/m3.jpg",
        description: "A super hero saves his land.",
        duration: 152,
        genre: "Super Hero"
    }
];


app.get('/api/movies', (req, res) => {
    res.json(movies);
});


app.post('/api/movies', (req, res) => {
    const newMovie = req.body;

    
    newMovie.id = movies.length ? movies[movies.length - 1].id + 1 : 1;

    movies.push(newMovie);
    res.json({ message: "Movie added successfully!", movie: newMovie });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
