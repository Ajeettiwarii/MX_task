import mongoose from "mongoose" 
export const connectdb=()=>{   
    mongoose.connect("mongodb://localhost:27017",{
        dbName:""
      }).then(()=>console.log("database connected"))  
      .catch((e)=>console.log(e))

}
 