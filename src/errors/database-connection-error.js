"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
const _1 = require(".");
class DatabaseConnectionError extends _1.CustomError {
    constructor() {
        super('Error connecting to database');
        this.statusCode = 500;
        this.reason = 'Error connecting to database';
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [
            { status: false, message: this.reason }
        ];
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
