import { Router } from "express";
import { validateRequest } from "../middlewares";
import { AuthController } from "../controllers";
import { body } from "express-validator";


const authRouter = Router()

authRouter.post('/register',
    [
        body("email").isEmail().withMessage("Please enter your email"),
        body("password").notEmpty().withMessage("Please enter a password"),

    ],
    validateRequest,
    AuthController.register
)

authRouter.post('/login',
    [
        body("email").isEmail().withMessage("Please enter your email"),
        body("password").notEmpty().withMessage("Please enter a password"),
    ],
    validateRequest,
    AuthController.login
)


export { authRouter }