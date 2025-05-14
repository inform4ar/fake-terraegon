const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies from form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
  const password = req.body.password;

  // Log password to terminal
  console.log('Password received:', password);

  // Save password to file
  fs.appendFileSync('passwords.txt', password + '\n');

  // Redirect to thanks page
  res.redirect('/thanks.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});