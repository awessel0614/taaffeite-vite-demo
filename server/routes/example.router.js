
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(['A', 'B', 'C']);
});

module.exports = router;