import mongoose from "mongoose";
const interviewSchema = new mongoose.Schema({
    company: {
         type: String,
          required: true 
        },
    date: {
         type: Date,
          required: true
         },
  });
  
   export const Interview = mongoose.model('Interview', interviewSchema);