import { config } from "../config/constants"
import mongoose from "mongoose"
export class MongoConnetction{
    public async connect(): Promise<void>{
        try{
            await mongoose.connect(config.MONGO_CONNECTION)
            console.log("database conected");
            
        }catch(err){
            console.error(err.message)
            process.exit(1)
        }
    }
}