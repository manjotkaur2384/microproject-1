const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the public directory (HTML, CSS, JS)
app.use(express.static('public'));

// Import JSON data
const data = require('./data/data.json');

// API Route to fetch JSON data
app.get('/api/data', (req, res) => {
    console.log("Fetching data..."); // Log to check if this route is being hit
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
