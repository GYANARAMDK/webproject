const express=require('express');
const signuphandler=require('../Controler/signuphandler.js')
const loginhandler=require('../Controler/loginhandler.js')
const router=express.Router();

router.route('/register').post(signuphandler);
router.route('/login').post(loginhandler)



module.exports=router;
