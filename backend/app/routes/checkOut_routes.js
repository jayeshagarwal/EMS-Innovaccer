const express = require('express');
const router = express.Router();
const path = require("path");

const {
    search,
    users,
    checkOut
} = require(path.resolve("app/controllers/user"));


//router.get('/search', search);
router.post('/', checkOut);
module.exports = router;