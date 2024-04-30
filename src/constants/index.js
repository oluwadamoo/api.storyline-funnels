"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConstants = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.AppConstants = {
    jwtKey: process.env.JWT_KEY || 'estrhref23r235rf32fds',
    mongoUri: process.env.MONGO_URI,
    dbName: process.env.DB_NAME,
    port: process.env.PORT || 5000,
};
