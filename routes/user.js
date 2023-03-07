const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user")
const authMiddleware = require("../middleware/auth")

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     description: obtain an user by Id.
*/
userRouter.get("/:id",authMiddleware.isAuthentificated,userController.getUser)

module.exports = {userRouter}