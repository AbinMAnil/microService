const pool = require("../db/postgresConnection");
const {
  GET_PAGINATED_EMPLOYEE_LIST,
  GET_EMPLOYEE_DETAILS,
} = require("../queries/employees");

const listAllEmployees = (req, res, next) => {
  const { page, size = 10 } = req?.query;

  pool.query(
    GET_PAGINATED_EMPLOYEE_LIST,
    [parseInt(page) * size || 0, size],
    (error, result) => {
      if (error) res.status(500).json({ message: "something went wrong" });
      else
        res.status(200).json({
          data: (result?.rows || []).map((item) => {
            const { full_count, ...rest } = item;
            return rest;
          }),
          totalCount: result?.rows?.[0]?.full_count,
          size: result?.rowCount,
        });
    }
  );
};

const getEmployDetails = (req, res, next) => {
  pool.query(GET_EMPLOYEE_DETAILS, [req?.params?.id], (error, result) => {
    if (error) res.status(500).json({ message: "something went wrong" });
    else if (result?.rows?.length === 0)
      res.status(404).json({ message: "Cant find user" });
    else res.status(200).json(result?.rows?.[0]);
  });
};

const checkTable = (req, res, next) => {
  pool.query(`
SELECT EXISTS (
SELECT * FROM employees
  )
   `,
    (err, result) => {
      console.log(err, result);
      if (err) {
        pool.query(
          `create table employees (
              id SERIAL PRIMARY KEY,
              firstName VARCHAR(250),
              lastName VARCHAR(250),
              email VARCHAR(250),
              dept VARCHAR(250),
              salary INT,
              birthDate DATE,
              joinDate DATE,
              title VARCHAR(250)
          )`,
          (err, result) => {
            if (err) {
              res
                .status(500)
                .json({ message: "something went wrong , please try again" });
            } else next();
          }
        );
      }else{
        next();
      }
    }
  );
};

module.exports = {
  listAllEmployees,
  getEmployDetails,
  checkTable,
};
