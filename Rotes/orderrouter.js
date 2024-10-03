const express=require('express');
const router=express.Router();



const orderhandlerget=require('../Controler/orderhandlerget')
const orderhandlerpost=require('../Controler/orderhandlerpost')



router.route('/').post(orderhandlerpost);
router.route('/').get(orderhandlerget)


module.exports=router;
