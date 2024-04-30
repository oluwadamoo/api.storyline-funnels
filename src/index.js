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
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
const constants_1 = require("./constants");
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("starting...");
    if (!constants_1.AppConstants.mongoUri || !constants_1.AppConstants.dbName) {
        throw new Error('Please define your database connection strings');
    }
    try {
        mongoose_1.default.set('strictQuery', false);
        yield mongoose_1.default.connect(constants_1.AppConstants.mongoUri, {
            dbName: constants_1.AppConstants.dbName
        });
        console.log("Db connection successful");
    }
    catch (error) {
        console.log(error);
        console.log('Unable to connect to database');
    }
    app_1.app.listen(constants_1.AppConstants.port, () => {
        console.log(`listening on port:${constants_1.AppConstants.port} 🔥`);
    });
});
start();
