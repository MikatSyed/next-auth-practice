import mongoose from "mongoose";

const connectDb = async ()=>{
    if(mongoose.connections[0].readyState){
        return true;
    }
    try {
        await mongoose.connect(process.env.MONGODBURL);
        console.log("MongoDB connected");
        return true;

    }catch(error){
        console.log(error);
    }
}

export default connectDb;