const express=require('express');
const router=express.Router();

const orderhandler=require('../Controler/orderhandler')

router.route('/').post(orderhandler);

module.exports=router;
