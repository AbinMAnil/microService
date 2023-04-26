const express = require("express");
const { deleteEmployee , deleteAllEmployees} = require("../controller/deleteEmployee");
const { verifyEmployee  } = require("../middleware/employee");
const router = express.Router();

router.delete("/employee/:id", verifyEmployee, deleteEmployee); 
router.delete("/employee", deleteAllEmployees); 



module.exports = router;
