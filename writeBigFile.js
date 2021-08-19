
/*const { writeFileSync } = require('fs')

for(let i=0 ; i<10000 ; i++){
    writeFileSync('./content/bigfile.txt','hello world',{flag : 'a'})
}*/
var http = require('http')
var fs = require('fs')

http.createServer((req,res)=>{
    //const text = fs.readFileSync('./content/bigfile.txt','utf-8')
    //res.end(text)
    const fileStream = fs.createReadStream('./content/bigfile.txt','utf8')
    fileStream.on('open',() =>{
    fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
       res.end(err)
    })
}).listen(5000)