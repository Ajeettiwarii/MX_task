
import mongoose from "mongoose"

const batchSchema = new mongoose.Schema({
  name: {
     type: String, 
     required: true 
    },
});

 export const Batch = mongoose.model('Batch', batchSchema);


