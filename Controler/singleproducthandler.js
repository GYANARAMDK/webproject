const Product=require('../models/productmodel')


const singleproducthandler= async(req,res)=>{
    try {
        const productid=req.params.productid;
         const product= await Product.findOne(productid)
         res.json({product})
    } catch (error) {
        console.log(error)
         res.json({message:"we can't find product"})
    }

}


module.exports =singleproducthandler;