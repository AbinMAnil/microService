const GET_PAGINATED_EMPLOYEE_LIST = "SELECT count(*) OVER() AS full_count ,firstName, dept, title, id, email FROM employees OFFSET $1 LIMIT $2 ";
const GET_EMPLOYEE_DETAILS = "SELECT * FROM employees WHERE id = $1";

module.exports =  {
    GET_PAGINATED_EMPLOYEE_LIST,
    GET_EMPLOYEE_DETAILS
}

