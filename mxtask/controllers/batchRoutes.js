import express from "express";  
import Batch from "../models/batch"
const router = express.Router();  


export const getallbatches=async(req,res)=>{
    try {
        const batches = await Batch.find();
        res.json(batches);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}   

export const createnewbranch=async(req,res)=>{
    const batch = new Batch({
        name: req.body.name,
      });
    
      try {
        const newBatch = await batch.save();
        res.status(201).json(newBatch);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}