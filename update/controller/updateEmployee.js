const pool = require("../db/postgresConnection");
const { CHECK_USER_EXIST, UPDATE_EMPLOYEE } = require("../queries/employees");
const updateEmployee = (req, res, next) => {
  const {
    id,
    firstName,
    lastName = "",
    email,
    dept,
    title = "",
    joinDate = null,
    birthDate = null,
    salary = null,
  } = req?.body;



  pool.query(CHECK_USER_EXIST, [id], (error, result) => {
    if (error) res.status(500).json({ message: "Something went wrong!" });
    else {
      if (!result?.rows?.length) {
        res.status(404).json({ message: "Can't find the employee" });
      } else {
        pool.query(
          UPDATE_EMPLOYEE,
          [
            firstName,
            lastName,
            email,
            dept,
            title,
            joinDate,
            birthDate,
            salary,
            id
          ],
          (error, result) => {
            if (error)
              res.status(500).json({ message: "Something went wrong!" });
            else {

              res.status(201).json({ message: "Employee Updated successfully" });
            }
          }
        );
      }
    }
  });
};

module.exports = {
  updateEmployee,
};
