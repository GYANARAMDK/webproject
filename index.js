const express=require('express');
const dotenv=require('dotenv')
const mongoose=require('mongoose');
const cors=require('cors')




const authrouter=require('./Rotes/authrouter.js')
const productrouter=require('./Rotes/productrouter.js')
const orderrouter=require('./Rotes/orderrouter.js')
// const veryfyauth=require('./middleware/verifymeddleware.js')
const singleproductrouter=require('./Rotes/singleproductrouter.js')

const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send({message:"lodu lalit"});
})

app.use('/api/auth',authrouter);
app.use('/api/products',productrouter);
app.use('/api/auth/order',orderrouter);
app.use('/api/product',singleproductrouter)






const connectdb=require('./config/dconfig.js')
connectdb();
mongoose.connection.once("open",()=>{
    console.log('database connected successfully')
    app.listen(3000,()=>{
        console.log("sever created ");
    })
})
