"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const _1 = require(".");
class RequestValidationError extends _1.CustomError {
    constructor(errors) {
        super("Invalid request parameters");
        this.errors = errors;
        this.statusCode = 400;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map((error) => {
            return { status: false, message: error.msg, field: error.param };
        });
    }
}
exports.RequestValidationError = RequestValidationError;
