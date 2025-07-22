let myToken="12345"
let checkToken=(req,res,next)=>{
    
    if(req.query.token==""||req.query.token==undefined){
        return res.send({
            status:0,
            msg:"plz fill the token"
        })
    }
    if(req.query.token!=myToken){
        return res.send({
            status:0,
            msg:"plz fill the correct Token"
        })
    }
     next();  // Pass control to the next middleware or route
};
app.use(checkToken);//Middleware
module.exports={checkToken}
