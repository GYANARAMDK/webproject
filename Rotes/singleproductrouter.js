const express= require('express')


const singleproducthandler=require('../Controler/singleproducthandler');

const router=express.Router();

router.route('/').get(singleproducthandler);


module.exports=router;