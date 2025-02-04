import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect("sample url")

    }catch(err){
        return res.status(400).json({message:"failed to connect"})

    }
}

export default connectDB