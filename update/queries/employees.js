const CHECK_USER_EXIST = "SELECT s FROM employees s WHERE s.id = $1";

const UPDATE_EMPLOYEE =
  "UPDATE employees SET firstName = $1 , lastName = $2, email = $3 , dept = $4 , title = $5 , joinDate = $6 , birthDate = $7, salary = $8   WHERE id = $9";

module.exports = {
  CHECK_USER_EXIST,
  UPDATE_EMPLOYEE
};
