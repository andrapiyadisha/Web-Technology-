const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const Student = require('./Student');

const connectionString = "mongodb+srv://23010101010:disha123@cluster1.okrty.mongodb.net/classDB";
mongoose.connect(connectionString).then(()=>{
    console.log('CloudDB');

const app = express();

app.use(bodyparser.urlencoded());

//Get All
app.get('/students',async(req,res)=>{
    const ans = await Student.find();
    res.send(ans);
});

//Get by ID
app.get('/students/:id',async(req,res)=>{
    const ans = await Student.findOne({id:req.params.id});
    res.send(ans);
});

 
//Create
app.post('/students',async(req,res)=>{
    stu = new Student({...req.body});
    const ans = await stu.save();
    res.send(ans);
});

//Delete
app.delete('/students/:id',async(req,res)=>{
    const ans = await Student.deleteOne({id:req.params.id});
    res.send(ans);
});

//updete
app.patch('/students/:id',async(req,res)=>{
    const stu = await Student.findOne({id:req.params.id});
    stu.name = req.body.name;
    const ans = await stu.save();
    req.send(ans);
});

    app.listen(3000,()=>{
        console.log("server start");
    });
});