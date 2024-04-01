const express = require('express');
const app = express();
const port = 3000; // Choose any available port

// Serve static files from the public folder
app.use(express.static('public'));

// API Route to serve JSON data
const jsonData = require('./data/data.json');
app.get('/api/data', (req, res) => {
  res.json(jsonData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
