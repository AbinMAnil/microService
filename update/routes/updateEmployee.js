const express = require("express");
const { updateEmployee    } = require("../controller/updateEmployee");
const { verifyEmployee } = require("../middleware/employee");
const router = express.Router();


router.put("/employee" ,verifyEmployee , updateEmployee);

module.exports = router; 