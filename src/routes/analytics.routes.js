const express = require("express");
const router = express.Router();

const { getTopStudents } = require("../controller/analytics.controller");

router.get("/top-students", getTopStudents);

module.exports = router;