const express = require("express");
const { createEmployee } = require("../controller/createEmployee");
const { verifyEmployee } = require("../middleware/employee");
const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     NewUser:
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
 *     post:
 *       summary: Create a JSONPlaceholder user.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewUser'
 *
 *       responses:
 *         201:
 *           description: Create new employee
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                  message:
 *                    type: string,
 *                    example: Employee added successfully
 *         400:
 *           description: E mail already exist
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                  message:
 *                    type: string,
 *                    example: Email already exists.
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
router.post("/employee", verifyEmployee, createEmployee);

module.exports = router;
