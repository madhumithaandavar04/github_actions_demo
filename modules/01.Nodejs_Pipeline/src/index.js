// Importing required modules
const express = require("express");
const cors = require("cors"); // Import the CORS module

// Initialize the express application
const app = express();

// Use CORS middleware to allow cross-origin requests
// Allow all origins (you can configure it to be more restrictive)
app.use(cors());

// Set the port
const PORT = process.env.PORT || 3000;

// Define a route for the home page
app.get("/api", (req, res) => {
  res.send({ message: "Hello, World! Welcome to the Express Dummy App!" });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
