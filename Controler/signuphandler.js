const CryptoJS=require('crypto-js')
const User=require('../models/usermodel.js');

const signuphandler= async(req,res)=>{
    const {name, number ,password,email}=req.body;
    try {
        const newuser= new User({
            name,
            number,
            password:CryptoJS.AES.encrypt(password,process.env.SECRET_KEY),
            email
        })
        const saveduser=  await newuser.save();
        res.json(saveduser);
    } catch (error) {
        res.json(error);
    }

}


module.exports=signuphandler;