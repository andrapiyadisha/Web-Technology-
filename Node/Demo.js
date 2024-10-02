const fs = require('fs');

fs.exists('path.js', (data)=>{
    console.log(data ? 'Found' : 'Note Found!');
});

fs.stat('nodeDemo.txt',(err,data)=>{
    console.log(data);
});

fs.readFile('nodeDemo.txt',(err,data)=>{
         console.log(data.toString());
 });

fs.appendFile('nodeDemo.txt',' Disha Andrapiya',(err,data)=>{
    
});

fs.readFile('nodeDemo.txt',(err,data)=>{
    fs.writeFile('demoNode.txt',data,(err,data)=>{
    });
});
 data = fs.readFileSync('nodeDemo.txt');
 console.log(data);
 console.log('Disha');

fs.unlink('demoNode.txt',()=>{
    console.log('File Deleted');
})