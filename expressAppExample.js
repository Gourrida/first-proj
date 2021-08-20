const express = require('express')
const path = require('path')


const app = express();
app.use(express.static('./navbar-app'))

//app.get('/',(req,res)=>{
//    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//})

app.get('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log('listening to port 5000')
})