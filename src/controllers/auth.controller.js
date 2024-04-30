"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const models_1 = require("../models");
const errors_1 = require("../errors");
const utils_1 = require("../utils");
const constants_1 = require("../constants");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    static register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield models_1.User.findOne({ email: req.body.email });
            if (user) {
                throw new errors_1.BadRequestError('User with email exists');
            }
            const newUser = models_1.User.build(Object.assign({}, req.body));
            yield newUser.save();
            const userJwt = jsonwebtoken_1.default.sign({
                id: newUser.id,
                email: newUser.email,
            }, constants_1.AppConstants.jwtKey);
            return res.status(201).json({
                status: true,
                message: 'Account created!',
                data: {
                    token: userJwt
                }
            });
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield models_1.User.findOne({ email: req.body.email });
            if (!user) {
                throw new errors_1.NotAuthorizedError("Invalid Credentials");
            }
            const passwordMatch = yield utils_1.Password.compare(user.password, req.body.password);
            if (!passwordMatch) {
                throw new errors_1.NotAuthorizedError("Invalid Credentials");
            }
            const userJwt = jsonwebtoken_1.default.sign({
                id: user.id,
                email: user.email,
            }, constants_1.AppConstants.jwtKey);
            res.status(200).send({
                status: true,
                message: "Signedin successfully",
                data: {
                    token: userJwt
                }
            });
        });
    }
}
exports.AuthController = AuthController;
