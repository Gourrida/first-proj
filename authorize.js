const authorize =(req,res,next)=>{
    console.log('auth 3la 3ajla')
    const {user}=req.query;
    if(user === "john"){
        req.user ={name:'john',id:3}
         next()
    }
   else{
       res.status(404).send('unauthorized')
   }
}
module.exports = authorize
