import mongoose from "mongoose"; 
const studentSchema = new mongoose.Schema({
    name: {
         type: String,
          required: true
         },
    college: {
         type: String, 
         required: true
         },
    status: { 
        type: String,
         enum: ['placed', 'not_placed'], 
         required: true },
    courseScores: {
      dsa: { 
          type: Number,
           required: true
           },
      webD: {
           type: Number, 
           required: true 
          },
      react: {
           type: Number,
            required: true 
          },
    },
  });
  
 export  const Student = mongoose.model('Student', studentSchema);
  
