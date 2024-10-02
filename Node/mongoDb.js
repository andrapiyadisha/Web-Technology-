const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const mongoosDemo = require('./mongoosDemo.js');

const app = express();

mongoose 
      .connect("mongodb+srv://23010101010:disha123@cluster1.okrty.mongodb.net/", {useNewUrlParser: true,})
      .then(()=>{
        
        app.use(bodyparser.urlencoded({extended: false}));
        app.listen(3000,()=>{
          console.log("server start");
        })
      })
      