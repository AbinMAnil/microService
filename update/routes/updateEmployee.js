const express = require("express");
const { updateEmployee    } = require("../controller/updateEmployee");
const { verifyEmployee } = require("../middleware/employee");
const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     NewUser:
 *       type: object
 *       required:
 *          -firstName
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
 * /api/v1/employee:
 *     put:
 *       summary: update a JSONPlaceholder user.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewUser'
 *
 *       responses:
 *         200:
 *           description: update new employee
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                  message:
 *                    type: string,
 *                    example: Employee Updated successfully
 *         404:
 *           description: Can't find the employee
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                  message:
 *                    type: string,
 *                    example: Can't find the employee.
 *         500:
 *           description: internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                  message:
 *                    type: string
 *                    description: something went wrong
 *                    example : something went wrong
 */


router.put("/employee" ,verifyEmployee , updateEmployee);

module.exports = router; 