import express from "express"; 
import { Student } from "../models/student";
export const getallstudents=async(req,res)=>{
    try {
        const students = await Student.find();
        res.json(students);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}   


export const newstudent=async(req,res)=>{
    const student = new Student({
        name: req.body.name,
        college: req.body.college,
        status: req.body.status,
        courseScores: req.body.courseScores,
      });
    
      try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}