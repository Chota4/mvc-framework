// Import required modules
const express = require('express');

// Initialize router
const router = express.Router();

// Render the landing page
router.get('/', (req, res) => {
    res.render('index', { title: 'Online Book Store' });
});

// Export the router
module.exports = router;