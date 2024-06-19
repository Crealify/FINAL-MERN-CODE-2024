import mongoose from "mongoose"


export const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected ")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}