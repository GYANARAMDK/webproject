const mongoose=require('mongoose');
const orderschema=mongoose.Schema({
    
    "userid":{type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    "item":[{
        "productid":{type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'product'
    },
        "quantity":{
            type:Number,
            required:true
        },
        "price":{type:Number,
            required:true
        }
    }],
    "totalamount":{type:Number,
        required:true
    },
    "orderstatus":{type:String,
        enum:["pending","delivered","cancelled"],
        default:"pending"
    },
    "ordercreated":{
        type:Date,
        default:Date.now
    }
})
const Order=mongoose.model('order',orderschema);
module.exports=Order;