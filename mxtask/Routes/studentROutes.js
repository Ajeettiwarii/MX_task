import express from "export"
const studentrouter = express.Router();  

import { getallstudents, newstudent } from "../controllers/studentRouter";


studentrouter.get("/",getallstudents)

studentrouter.post("/",newstudent)

export default router;
