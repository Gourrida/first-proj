const http = require('http');

const server = http.createServer((req,res)=>{
if (req.url === '/'){
    res.end('home page')
}
if (req.url === '/'){
    res.end('about page')
    // !!!! blocking code her !!!
    // it blocks all endpoint 
    // thats why we should usez always the async 
}
res.end('error page')

});

server.listen(5000,()=>{
console.log("listening to port 5000");
});