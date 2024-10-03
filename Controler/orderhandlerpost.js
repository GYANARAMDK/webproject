const Order=require('../models/ordermodel.js');

const User=require('../models/usermodel.js')
const orderhandlerpost=  async (req,res)=>{
    
   try {
    const neworder= new Order({
        userid:req.body.userid,
        item:req.body.item,
        totalamount:req.body.totalamount,
        ordercreated:Date.now(),
        orderstatus:"pending"
    })
   
    
    const savedorder= await neworder.save();
  
   
    const updatedUser= await User.findByIdAndUpdate(req.body.userid,{
        $push:{orders:savedorder._id}},
        {new:true}
    )
    
    
    res.json({savedorder});

   } catch (error) {
     console.log(error);
     res.json({message:"something gone wrong"})
   }
}

module.exports=orderhandlerpost;