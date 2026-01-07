const express = require("express");
const mongoose = require("mongoose");

const app = express();


app.use(express.json());


const bookRoutes = require("./routes/bookroute");
app.use("/", bookRoutes);


app.get("/", (req, res) => {
  res.send("Book API running");
});


module.exports = app;


if (require.main === module) {
  mongoose
    .connect("mongodb://127.0.0.1:27017/booksdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      app.listen(3000, () => {
        console.log("Server running on port 3000");
      });
    })
    .catch(err => {
      console.error("MongoDB connection error:", err);
    });
}
