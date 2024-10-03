const User=require('../models/usermodel.js')


const orderhandlerget= async (req,res)=>{
        try {
            const userid=req.body.userid
            const user=await User.findById(userid).populate('orders')
            !user && res.json({message :"user not found "})
            // const userorder=user.orders//user's orders array have orders id not product'id
            // no problem here we have populate method which gives you all details 
            //of that specified path document or collection
            const allproduct =user.orders.map(product=>{
                return (product.item);
                
            })
            res.json({allproduct})
        } catch (error) {
            console.log(error)
           
            res.json("something went wrong")
        }
}
module.exports=orderhandlerget;