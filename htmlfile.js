
const http = require('http')
const {readFileSync} = require('fs')
const homePage = readFileSync('./index.html')
const server = http.createServer((req,res)=>{
    const url = req.url
})