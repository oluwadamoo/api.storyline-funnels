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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = void 0;
const models_1 = require("../models");
const errors_1 = require("../errors");
class PageController {
    static addPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingPage = yield models_1.Page.findOne({ slug: req.body.slug });
            if (existingPage) {
                throw new errors_1.BadRequestError("Slug has to a unique field!");
            }
            const page = models_1.Page.build(Object.assign({}, req.body));
            yield page.save();
            return res.status(201).json({
                status: true,
                message: 'Page created!',
                data: {
                    page
                }
            });
        });
    }
    static getPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = yield models_1.Page.findOne({ slug: req.params.slug });
            if (!page) {
                throw new errors_1.NotFoundError("Page not found!");
            }
            return res.status(200).send({
                status: true,
                message: "Page retrieved",
                data: {
                    page
                }
            });
        });
    }
}
exports.PageController = PageController;
