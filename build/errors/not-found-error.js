"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const _1 = require(".");
class NotFoundError extends _1.CustomError {
    constructor(message) {
        super('Resource not found');
        this.statusCode = 404;
        this.message = "Resource not found";
        if (message) {
            this.message = message;
        }
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors() {
        return [
            { status: false, message: this.message }
        ];
    }
}
exports.NotFoundError = NotFoundError;
