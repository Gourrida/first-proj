const http =require ('http') 

const server = http.createServer((req,res)=>{
    
    console.log(req.method);
    console.log(req.url);
    console.log('user hit the server .....');
    res.writeHead(200,{'content-type':"text/html"})
    res.end('<h1>hello world</h1>')

}).listen(5000)