const express = require("express");
const { listAllEmployees , getEmployDetails   } = require("../controller/listEmployee");
const pool = require("../db/postgresConnection");
const router = express.Router();

router.get('/addTable' , (erq, res) => { 

    pool.query( `create table employees (
        id SERIAL PRIMARY KEY,
        firstName VARCHAR(250),
        lastName VARCHAR(250),
        email VARCHAR(250),
        dept VARCHAR(250),
        salary INT,
        birthDate DATE,
        joinDate DATE,
        title VARCHAR(250)
    )` , (err , result) => {
        if(err) res.status(500).json({message: "something went wrong"});
        else res.status(200).json({message: "Table created success", ...result})
    } )
})
router.get("/employees" , listAllEmployees);
router.get("/employees/:id" , getEmployDetails);

module.exports = router;