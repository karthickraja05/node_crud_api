const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Todos",(error)=>{
    if(!error){
        console.log('Database Connected Success');
    }else{
        console.log('Database Connect Failed');
    }
});

const Student = require('./student.model');