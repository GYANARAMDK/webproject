const Order=require('../models/ordermodel');


const orderhandler=  async (req,res)=>{
    
   try {
    const neworder= new Order({
        userid:req.body.userid,
        item:req.body.item,
        totalamount:req.body.totalamount,
        ordercreated:Date.now(),
        orderstatus:"pending"
    })
   
    
    const savedorder= await neworder.save();
    res.json({savedorder});

   } catch (error) {
     console.log(error);
     res.json({message:"something gone wrong"})
   }
}

module.exports=orderhandler;