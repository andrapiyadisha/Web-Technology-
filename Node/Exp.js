const express = require('express');
const app = express();
const fs = require('fs');

app.get('/',function(req,res){
    res.end('Hello World');
});
app.get('/home',(req,res)=>{
    fs.readFile('nodeDemo.txt',(err,data)=>{
        console.log(data.toString());
});

    res.send(
        `<a href='/about'><button><h1>About</h1></button></a>
        <a href='/Services'><button><h1>Services</h1></button></a>
        <a href='/Contact'><button><h1>Services</h1></button></a>
       `
    );
});

app.get('/about',(req,res)=>{
    res.send(
        `<a href='/about'><button><h1>About</h1></button></a>
        <a href='/Services'><button><h1>Services</h1></button></a>
        <a href='/Contact'><button><h1>Services</h1></button></a>
       `
    );
});

app.get('/contact',(req,res)=>{
    res.send(
        `<a href='/about'><button><h1>About</h1></button></a>
        <a href='/Services'><button><h1>Services</h1></button></a>
        <a href='/Contact'><button><h1>Services</h1></button></a>
       `
    );
});

app.get('/services',(req,res)=>{
    res.send(
        `<a href='/about'><button><h1>About</h1></button></a>
        <a href='/Services'><button><h1>Services</h1></button></a>
        <a href='/Contact'><button><h1>Services</h1></button></a>
       `
    );
});
app.listen(3000,()=>{
    console.log("Server Start");
});


