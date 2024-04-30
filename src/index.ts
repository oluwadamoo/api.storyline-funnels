import mongoose from "mongoose";
import { app } from "./app";
import { AppConstants } from "./constants";

const start = async () => {
    console.log("starting...")

    if (!AppConstants.mongoUri || !AppConstants.dbName) {
        throw new Error('Please define your database connection strings')
    }


    try {

        mongoose.set('strictQuery', false)
        await mongoose.connect(AppConstants.mongoUri, {
            dbName: AppConstants.dbName
        })

        console.log("Db connection successful")
    } catch (error) {
        console.log(error)
        console.log('Unable to connect to database')
    }



    app.listen(AppConstants.port, () => {
        console.log(`listening on port:${AppConstants.port} 🔥`);

    })

}

start()