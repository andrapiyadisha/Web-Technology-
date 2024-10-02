const url = require('url');

// const link = 'https://nodejs.org/docs/latest/api/child_process.html';
// const a = url.parse(link, true);
// console.log(a.host); 
// console.log(a.pathname); 


const link = 'https://nodejs.org/en/search?q=%20os&section=all';
const a = url.parse(link, true);
console.log(a.search); 