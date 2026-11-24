
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobtitle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    skills:{
        type:[String],
        required:true
    }
});


export const Job = mongoose.model("Job", jobSchema);