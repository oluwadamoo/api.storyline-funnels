"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
const express_validator_1 = require("express-validator");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.post('/register', [
    (0, express_validator_1.body)("email").isEmail().withMessage("Please enter your email"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Please enter a password"),
], middlewares_1.validateRequest, controllers_1.AuthController.register);
authRouter.post('/login', [
    (0, express_validator_1.body)("email").isEmail().withMessage("Please enter your email"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Please enter a password"),
], middlewares_1.validateRequest, controllers_1.AuthController.login);
