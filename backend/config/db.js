import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        const connection =  await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.info(`suceessfully connected ${connection.connection.host}`);
    }catch(err){
        console.info(`connecting to db error=>${err}`);
        process.exit(1);
    }
}

export default connectDB;