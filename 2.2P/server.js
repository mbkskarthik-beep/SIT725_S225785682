const express = require('express');

const app = express();
const port = 5507;


// app.use(express.static('public'));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send("Welcome to the Calculator API!");
});

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
   

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send("Invalid numbers. Please pass num1 and num2 correctly.");
    }

    const result = num1 + num2;
    res.send(`Result: ${result}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
