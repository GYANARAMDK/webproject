const mongoose=require('mongoose')
const userschema= mongoose.Schema({
    "name":{type:String,required:true},
    "number":{type:Number,required:true,unique:true},
    "password":{type:String,required:true},
    "email":{type:String,required:true,unique:true},
    "orders":[{type:mongoose.Schema.Types.ObjectId,
        ref:'order'
    }]
},{
    timestamps:true
}

);
const User=mongoose.model('user',userschema);
module.exports=User;