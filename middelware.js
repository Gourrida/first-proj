const express =require('express');
const app = express();
const authorize = require('./authorize')
const logger = require('./logger')

app.use([logger,authorize]);

app.get('/',(req,res)=>{
    res.send('home page')
})
app.get('/about',(req,res)=>{
    res.send('about page')
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})