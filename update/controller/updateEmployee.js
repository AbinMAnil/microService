const pool = require("../db/postgresConnection");
const { CHECK_USER_EXIST, UPDATE_EMPLOYEE } = require("../queries/employees");
const updateEmployee = (req, res, next) => {
  console.log(req.body);
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
        res.status(400).json({ message: "Can't find the user" });
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
            console.log(error)
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
