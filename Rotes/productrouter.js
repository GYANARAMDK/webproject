const express=require('express')
const producthandler =require('../Controler/producthandler.js')


const router=express.Router();
router.route('/').get(producthandler);

module.exports=router;