// Create web server

// 1. Import express
const express = require('express');

// 2. Create router
const router = express.Router();

// 3. Create route
router.get('/comments', (req, res) => {
    res.send('Comments');
});

// 4. Export router
module.exports = router;