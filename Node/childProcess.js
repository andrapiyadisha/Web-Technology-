const child_process = require('child_process');
const { error } = require('console');
const { stdout } = require('process');
child_process.exec('dir',(error,stdout,stdin)=>{
    console.log(error);
}) 