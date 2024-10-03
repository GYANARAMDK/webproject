
const Product= require('../models/productmodel');


const producthandler= async(req,res)=>{
    try {
        const Allproduct=await Product.find({})
        console.log("all product fetched succesfully");
        res.json(Allproduct)
    } catch (error) {
        console.log("error encountring")
        console.log(error);
        // res.josn({message:'sever error'})
        return error;
    }
}
module.exports=producthandler;