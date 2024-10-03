const CryptoJS=require('crypto-js')
const User=require('../models/usermodel.js');
const jwt=require('jsonwebtoken');


const loginhandler= async (req,res)=>{
   
    try {
       const User1= await User.findOne({number:req.body.number})
       !User1 && res.json({message:"invalid number"})
       const dpass=CryptoJS.AES.decrypt(User1.password,process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8)
       dpass !== req.body.password && res.json({message:"invalid password"})
       const {passwrod ,...rest}=User1._doc;
       const accesstoken=jwt.sign({id:User1._id},process.env.TOKEN_KEY)
       res.json({...rest,accesstoken});
       
    } catch (error) {
       res.json(error);
    }
}
module.exports=loginhandler;