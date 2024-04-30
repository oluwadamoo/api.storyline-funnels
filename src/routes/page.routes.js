"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageRouter = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
const express_validator_1 = require("express-validator");
const pageRouter = (0, express_1.Router)();
exports.pageRouter = pageRouter;
pageRouter.get('/:slug', controllers_1.PageController.getPage);
pageRouter.post('/add-new', middlewares_1.currentUser, middlewares_1.requireAuth, [
    (0, express_validator_1.body)("headline").notEmpty().withMessage("Please enter page headline"),
    (0, express_validator_1.body)("subheading").notEmpty().withMessage("Please enter page subheading"),
    (0, express_validator_1.body)("slug").notEmpty().withMessage("Please enter page slug"),
    (0, express_validator_1.body)("contents").isArray({ min: 1 }).withMessage("Please add a card or a content or button or something")
], middlewares_1.validateRequest, controllers_1.PageController.addPage);
