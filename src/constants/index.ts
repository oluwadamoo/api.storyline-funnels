import { config } from "dotenv";

config()

export const AppConstants = {
    jwtKey: process.env.JWT_KEY || 'estrhref23r235rf32fds',
    mongoUri: process.env.MONGO_URI,
    dbName: process.env.DB_NAME,
    port: process.env.PORT || 5000,

}