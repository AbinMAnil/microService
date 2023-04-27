const pool = require("../db/postgresConnection");
const { CHECK_EMAIL_EXIST, ADD_EMPLOYEE } = require("../queries/employees");
const createEmployee = (req, res, next) => {
  const {
    firstName,
    lastName = "",
    email,
    dept,
    title = "",
    joinDate = null,
    birthDate = null,
    salary = null,
  } = req?.body;


  pool.query(CHECK_EMAIL_EXIST, [email], (error, result) => {
    if (error) res.status(500).json({ message: "Something went wrong!" });
    else {
      if (result?.rows?.length) {
        res.status(400).json({ message: "Email already exists." });
      } else {
        pool.query(
          ADD_EMPLOYEE,
          [
            firstName,
            lastName,
            email,
            dept,
            title,
            joinDate,
            birthDate,
            salary,
          ],
          (error, result) => {
            if (error)
              res.status(500).json({ message: "Something went wrong!" });
            else {
              res.status(201).json({ message: "Employee added successfully" });
            }
          }
        );
      }
    }
  });
};

module.exports = {
  createEmployee,
};
