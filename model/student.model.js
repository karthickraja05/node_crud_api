const mongoose = require('mongoose');

let StudentSchema = new mongoose.Schema({
    name : {
        type: String,
        required: 'Required'
    },
    roll_number: {
        type: Number,
        required: 'Required'
    },
    dob: {
        type: String
    },
    age: {
        type: String
    }
});

mongoose.model('students',StudentSchema);
