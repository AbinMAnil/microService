const express = require("express");
const { createEmployee    } = require("../controller/createEmployee");
const { verifyEmployee } = require("../middleware/employee");
const router = express.Router();


router.post("/employee" ,verifyEmployee , createEmployee);

module.exports = router; 