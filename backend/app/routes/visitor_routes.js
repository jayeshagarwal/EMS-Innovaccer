const express = require('express');
const router = express.Router();
const path = require("path");

const {
    users,
} = require(path.resolve("app/controllers/user"));

router.post('/', users);
module.exports = router;