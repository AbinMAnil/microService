const CHECK_EMAIL_EXIST = "SELECT s FROM employees s WHERE s.email = $1";
const ADD_EMPLOYEE =
  "INSERT INTO employees (firstName , lastName , email , dept , title , joinDate , birthDate, salary) VALUES ($1 , $2 , $3 , $4 , $5 , $6 , $7 , $8 )";

module.exports = {
  CHECK_EMAIL_EXIST,
  ADD_EMPLOYEE
};
