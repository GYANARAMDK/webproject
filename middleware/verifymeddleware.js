const jwt=require('jsonwebtoken')

const veryfyauth=(req,res,next)=>{
 const accesstoken=req.header('Authorization')
 !accesstoken && res.json({message:"access denied"})
 try {
    const decoded=jwt.verify(accesstoken,process.env.TOKEN_KEY)
    req.user=decoded;
    next();
 } catch (error) {
    res.json({message:"invalid token"})
 }
}

module.exports=veryfyauth;