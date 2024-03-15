const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Define a route to serve 'index.html' for any route other than '/'
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// Your existing server setup code...
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
