const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const mongoosDemo = require('./mongoosDemo.js');

const app = express();

mongoose 
      .connect("mongodb+srv://23010101010:disha123@cluster1.okrty.mongodb.net/", {useNewUrlParser: true,})
      .then(()=>{
        app.use(bodyparser.urlencoded({extended: false}));

        app.get('/faculties', async (req,res)=>{
          faculties = await Faculty.fine();
          res.send(faculties);
        });

        app.get('/faculties/:id', async (req,res)=>{
          faculties = await Faculty.findOne({FacultyID:req.params.id});
          res.send(faculties);          
        });

        app.post('/faculties',async (req,res)=>{
          const faculty = new Faculty({
            FacultyID: req.body.FacultyID,
            FacultyName: req.body.FacultyName,
            FacultyInitial: req.body.FacultyInitial
          })
          await faculty.save();
          res.send(faculties);
        })

        app.delete('/faculty/:id', async (req,res)=>{
          
        })
        
        app.listen(3000,()=>{
          console.log("server start");
        })
      })