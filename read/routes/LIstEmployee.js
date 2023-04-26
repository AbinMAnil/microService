const express = require("express");
const { listAllEmployees , getEmployDetails   } = require("../controller/listEmployee");
const router = express.Router();


router.get("/employees" , listAllEmployees);
router.get("/employees/:id" , getEmployDetails);

module.exports = router;