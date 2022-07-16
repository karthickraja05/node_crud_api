const express = require('express');
const { read } = require('fs');
const mongoose = require('mongoose');
const qs = require('querystring');

const router = express.Router();
const StudentModel = mongoose.model('students');
router.get('/',(req,res)=>{
    StudentModel.find((err,docs)=>{
        if(!err){

            res.json(docs);

        }else{
            res.send('Failed');
        }
    });
    // res.send('Welcome');
});


router.get('/add',(req,res)=>{
    // res.json(req.query);
    let student = new StudentModel();
    student.name = req.query.name ?? null;
    student.roll_number = req.query.roll_number ?? null;
    student.dob = req.query.dob ?? null;
    student.age = req.query.age ?? null;
    student.save();
    var response = {
        'code' : 1,
        'message' : 'Success',
        'data' : student,
    };
    res.json(response);
});


router.get('/test',(req,res)=>{
    res.json(req.query);
    console.log(req.query.name);
    res.send(req.query.name);
});


module.exports = router;