"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthorizedError = void 0;
const _1 = require(".");
class NotAuthorizedError extends _1.CustomError {
    constructor(message) {
        super('Not authorized');
        this.statusCode = 401;
        this.message = "Not authorized";
        if (message) {
            this.message = message;
        }
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }
    serializeErrors() {
        return [
            { status: false, message: this.message }
        ];
    }
}
exports.NotAuthorizedError = NotAuthorizedError;
