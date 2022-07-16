const connection = require('./model');
const express = require('express');
const application = express();
const expressHandlerbars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path'); // default package no need to install
const StudentController = require('./controller/students');

application.use(bodyParser.urlencoded({
    extended: true
}));

application.set('views',path.join(__dirname,'/views/'));

application.engine('hbs',expressHandlerbars.engine({
    extname: 'hbs',
    defaultLayout : 'mainLayout',
    layoutsDir: __dirname + '/views/layouts'
}));

application.set('view engine','hbs');

application.use(express.json());
application.use('/students',StudentController);

application.get('/',(req,res1)=>{
    // res1.send('<h1>Success</h1>');
    res1.render('index',{});
});

application.listen(3000,()=>{
    console.log('Server Started at Port number 3000');
});