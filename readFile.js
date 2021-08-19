const { createReadStream } = require('fs')

const stream = createReadStream('./content/second.txt') 

stream.on('data',(result)=>{
    console.log(result)
})