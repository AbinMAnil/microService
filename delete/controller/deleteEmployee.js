const pool = require("../db/postgresConnection");
const {
  CHECK_USER_EXIST,
  DELETE_EMPLOYEE,
  DELETE_ALL_EMPLOYEES,
  
} = require("../queries/employees");

const deleteEmployee = (req, res, next) => {
  console.log(req.params);

  const { id } = req?.params;

  pool.query(CHECK_USER_EXIST, [id], (error, result) => {
    if (error) res.status(500).json({ message: "Something went wrong!" });
    else {
      if (!result?.rows?.length) {
        res.status(400).json({ message: "Can't find the user" });
      } else {
        pool.query(DELETE_EMPLOYEE, [id], (error, result) => {
          console.log(error);
          if (error) res.status(500).json({ message: "Something went wrong!" });
          else {
            res.status(200).json({ message: "Employee removed successfully" });
          }
        });
      }
    }
  });
};

const deleteAllEmployees = (req, res, next) => {
console.log("hel")
  pool.query(DELETE_ALL_EMPLOYEES, (error, result) => {
    console.log(error)
    if (error) res.status(500).json({ message: "Something went wrong!" });
    else {
        res.status(200).json({ message : "All employees removed" })
    }
  });
};

module.exports = {
  deleteEmployee,
  deleteAllEmployees
};
