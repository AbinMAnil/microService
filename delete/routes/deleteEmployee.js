const express = require("express");
const { deleteEmployee , deleteAllEmployees} = require("../controller/deleteEmployee");
const { verifyEmployee  } = require("../middleware/employee");
const router = express.Router();




/**
 * @swagger
 * /api/v1/employee/{id}:
 *   delete:
 *     summary: remove employee by id
 *     description: removing the employee by specifying id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: employee id 
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: remove employee by id 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                  type: string
 *                  description: Employee removed successfully
 *                  example : Employee removed successfully
 *       404:
 *         description: user not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                  type: string
 *                  description: can't find employee
 *                  example : can't find employee
 *       500:
 *         description: internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                  type: string
 *                  description: something went wrong
 *                  example : something went wrong
 */
router.delete("/employee/:id", verifyEmployee, deleteEmployee); 

/**
 * @swagger
 * /api/v1/employee:
 *   delete:
 *     summary: remove all employee 
 *     description: removing all employee 
 *     responses:
 *       200:
 *         description: remove all employees
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                  type: string
 *                  description: All Employees removed successfully
 *                  example : all Employees removed successfully
 *       500:
 *         description: internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                  type: string
 *                  description: something went wrong
 *                  example : something went wrong
 */
router.delete("/employee", deleteAllEmployees); 



module.exports = router;
