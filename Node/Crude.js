const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const a = [
    {
        id:1,
        name:'Disha'
    },
    {
        id:2,
        name:'Shruti'
    },
    {
        id:3,
        name:'Darsh'
    }
]
app.use(bodyparser.urlencoded({extends:false}));
app.get('/a', (req,res)=>{
      res.json(a);
});

app.post('/a',(req,res)=>{
    id=a.length + i;
    const obj = {
        id:id,
        name:req.body.name
    }
    a.push(obj);
res.json(a);
});

app.delete('/a',(req,res)=>{
    const id = req.params.id;
    a.splice(id,1);
    res.json(a);
});

app.put('/a/:id',(req,res)=>{
    a[req.params.id].name = req.body.name;
    res.json(a);
});

app.listen(3000,()=>{
    console.log("Server Started");
});