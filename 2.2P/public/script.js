

function calculate(operation) {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultBox = document.getElementById("result");


    if (num1 === "" || num2 === "") {
        resultBox.innerText = "Please enter numbers.";
        return;
    }

    const url = `http://localhost:5507/${operation}?num1=${num1}&num2=${num2}`;
        

    fetch(url)
        .then(response => response.text())
        .then(data => {
            resultBox.innerText = data;
        })
        .catch(error => {
            console.error("Error:", error);
            resultBox.innerText = "Could not connect to the server.";
        });
}
