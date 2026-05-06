const express = require("express");
const router = express.Router();

const postRoutes = require("./posts.routes");
const analyticsRoutes = require("./analytics.routes");

router.use("/posts", postRoutes);
router.use("/analytics", analyticsRoutes);

module.exports = router;