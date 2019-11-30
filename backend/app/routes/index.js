const express = require('express');
const router = express.Router();

const routes = {
    checkInRoutes: require("./checkIn_routes"),
    checkOutRoutes: require("./checkOut_routes"),
}

router.use('/checkIn', routes.checkInRoutes);
router.use('/checkOut', routes.checkOutRoutes);
module.exports = router;