
import express from "express";
const interviewrouter = express.Router();

import { createnewinterview, getallinterview } from "../controllers/interviewRoutes";

   
interviewrouter.get("/",getallinterview)

  
interviewrouter.post("/",createnewinterview)


export default interviewrouter;
