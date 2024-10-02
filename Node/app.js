const http = require('http');
server = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html');
    if(req.url === "/favicon.ico"){
        res.end(' ');
    }else 
    if(req.url == "/home"){
        res.write("Welcome home");
        res.write("<br/>");
        res.write("byy");
        res.end();
    }else
    if(req.url == "/contact"){
        res.end("my number");
    }else {
        res.statusCode = 404;
        res.end("Not found");
    }   
})
server.listen(3000,()=>{
    console.log("Server start at 3000");
});
