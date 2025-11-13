import mongoose from "mongoose";

const studentsSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String
})

export default studentsSchema