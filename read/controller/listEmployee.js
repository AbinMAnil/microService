const pool = require("../db/postgresConnection");
const { GET_PAGINATED_EMPLOYEE_LIST, GET_EMPLOYEE_DETAILS } = require("../queries/employees");

const listAllEmployees = (req, res, next) => {
  console.log("data finding")
  const { page, size = 10 } = req?.query;
  pool.query(
    GET_PAGINATED_EMPLOYEE_LIST,
    [ parseInt(page) * size || 0 , size],
    (error, result) => {
      if (error) throw error;
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
  pool.query(
    GET_EMPLOYEE_DETAILS , [req?.params?.id],
    (error, result) => {

      if (error) throw error;
      else res.status(200).json(result?.rows?.[0]);
    }
  );
};

module.exports = {
  listAllEmployees,
  getEmployDetails,
};
