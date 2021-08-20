const express = require('express')
const app = express();



app.listen(5000,()=>{
    console.log('server is listening on port 5000');
})
app.get('/',(req,res)=>{
    res.send('Home page')
})
app.get('/about',(req,res)=>{
    res.send('About page')
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>resourceNotFound</h1>')
})
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use


