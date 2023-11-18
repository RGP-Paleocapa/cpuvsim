const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Define the path to your 'dist' directory
const distDir = path.join(__dirname, 'dist');

// Serve static files from the 'dist' directory (your Vite build output)
app.use(express.static(distDir));

// Handle all routes by serving the index.html file
app.get('*', (req, res) => {
  // Use path.join to construct the file path correctly
  const indexPath = path.join(distDir, 'index.html');

  // Use res.sendFile with error handling
  res.sendFile(indexPath, (err) => {
    if (err) {
      // Handle the error, e.g., log it or send an error response
      console.error(`Error sending index.html: ${err.message}`);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
