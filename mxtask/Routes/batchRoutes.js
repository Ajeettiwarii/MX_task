import express from "express";
const router = express.Router();

import { createnewbranch, getallbatches } from "../controllers/batchRoutes";



router.get("/",getallbatches)   


router.post("/" ,createnewbranch)

export default router;
