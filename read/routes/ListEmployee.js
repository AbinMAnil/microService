const express = require("express");
const {
  listAllEmployees,
  getEmployDetails,
} = require("../controller/listEmployee");
const pool = require("../db/postgresConnection");
const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     employee:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           example: user
 *         salary:
 *           type: integer
 *           example: 40000
 *         title:
 *           type: string
 *           example: Mr
 *         lastName:
 *           type: string
 *           example: user
 *         dept:
 *           type: string
 *           example: DEveloper
 *         email:
 *           type: string
 *           example: ab@gmail.com
 *         id:
 *           type: integer
 *           example: 1
 *         birthDate:
 *           type: date
 *           example: 1-12-2002
 *         joinDate:
 *           type: date
 *           example: 1-12-2002
 */


/**
 * @swagger
 * /api/v1/employees:
 *   get:
 *     summary: Paginated employee list
 *     description: give limit and size to get the employee list
 *     parameters:
 *       - in: query
 *         name: page
 *         required: false
 *         description: Integer value for the off set by default it is 0
 *         schema:
 *           type: integer
 *       - in: query
 *         name: size
 *         required: false
 *         description: Integer size for the off set by default it is 10
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                data:
 *                  type: array
 *                  description: Array of employees
 *                  items: 
 *                     $ref: '#/components/schemas/employee'
 *                totalCount:
 *                  type: integer
 *                  example: 8
 *                size:
 *                  type: integer
 *                  example: 5
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
router.get("/employees", listAllEmployees);


/**
 * @swagger
 * /api/v1/employees/{id}:
 *   get:
 *     summary: Find employee details
 *     description: Get employee details by specifying employ id as path param
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: employee id 
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Employee details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/employee'
 *       404:
 *         description: user not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                data:
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
router.get("/employees/:id", getEmployDetails);

module.exports = router;
