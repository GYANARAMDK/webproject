const mongoose=require('mongoose');
const productschema=mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true 
    },
    description: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true, 
        min: 0 
    },
    category: {
        type: String,
        required: true 
    },
    stock: {
        type: Number,
        required: true,
        min: 0 
    },
    imageUrl: {
        type: String,
        required: false 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    updatedAt: {
        type: Date,
        default: Date.now 
    }
})
const Product=mongoose.model('product',productschema);
module.exports=Product;