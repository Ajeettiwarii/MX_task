import express from "express";  
import { Interview } from "../models/interview";
const interviewRouter=express.Router();
export const getallinterview=async(req,res)=>{
    try {
        const interviews = await Interview.find();
        res.json(interviews);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}    

export const createnewinterview=async(req,res)=>{
      
    
    const interview = new Interview({
        company: req.body.company,
        date: req.body.date,
      });
    
      try {
        const newInterview = await interview.save();
        res.status(201).json(newInterview);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    
}