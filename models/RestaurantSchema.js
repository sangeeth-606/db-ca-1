import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name:{type:String,required:true},
    Price:{type:Number,required:true}
})

const resSchema = new mongoose.Schema({
    name:{type:String,required:true},
    city:{type:String,required:true},
    items:[itemSchema]
})

const ress=  mongoose.model("resSchema",resSchema)
export default ress