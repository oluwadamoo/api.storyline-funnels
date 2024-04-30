"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
const custom_error_1 = require("./custom-error");
class ServerError extends custom_error_1.CustomError {
    constructor(message) {
        super("An Error Occurred");
        this.statusCode = 500;
        this.message = "An Error Occurred";
        if (message) {
            this.message = message;
        }
        Object.setPrototypeOf(this, ServerError.prototype);
    }
    serializeErrors() {
        return [
            { status: false, message: this.message }
        ];
    }
}
exports.ServerError = ServerError;
