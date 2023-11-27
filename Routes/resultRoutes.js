import express from "express"
const resultrouter = express.Router();
import Result from "../models/results"
import { Student } from "../models/student"; 
import { Interview } from "../models/interview";
import { add } from "../controllers/resultRouter";

 
resultrouter.get("/",getallresults)

 

resultrouter.post("/",add)

 

module.exports = router;
