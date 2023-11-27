import express from "express";   

import { Student } from "../models/student"; 
import { Interview } from "../models/interview";
export const getallresults=async(req,res)=>{
    try {
        const results = await Result.find();
        res.json(results);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}     

export const add=async(req,res)=>{
    const result = new Result({
        student: req.body.studentId,
        interview: req.body.interviewId,
        result: req.body.result,
})   
}   



try {
    // Check if the student and interview exist
    const studentExists = await Student.findById(req.body.studentId);
    const interviewExists = await Interview.findById(req.body.interviewId);

    if (!studentExists || !interviewExists) {
      return res.status(404).json({ message: 'Student or interview not found' });
    }

    const newResult = await result.save();
    res.status(201).json(newResult);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
