const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Routes
const bookRoutes = require("./routes/bookroute");
app.use("/", bookRoutes);

// Simple root check (optional)
app.get("/", (req, res) => {
  res.send("Book API running");
});

// Export app for testing
module.exports = app;

// Start server only when not testing
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
