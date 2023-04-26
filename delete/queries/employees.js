const CHECK_USER_EXIST = "SELECT s FROM employees s WHERE s.id = $1";

const DELETE_EMPLOYEE = "DELETE FROM employees WHERE id = $1";

const DELETE_ALL_EMPLOYEES = "DELETE FROM employees";
module.exports = {
  CHECK_USER_EXIST,
  DELETE_EMPLOYEE,
  DELETE_ALL_EMPLOYEES,
};
