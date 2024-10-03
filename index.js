const express=require('express');
const dotenv=require('dotenv')
const mongoose=require('mongoose');
const cors=require('cors')


const authrouter=require('./Rotes/authrouter.js')
const productrouter=require('./Rotes/productrouter.js')
const orderrouter=require('./Rotes/orderrouter.js')

const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send({message:"lodu lalit"});
})

app.use('/api/auth',authrouter);
app.use('/api/product',productrouter);
app.use('/api/auth/order',orderrouter);



const databseurl=process.env.dATABASE_URL;
mongoose.connect(databseurl)





mongoose.connection.on('open',()=>{
    console.log('database connected successfully')
    app.listen(3000,()=>{
        console.log("sever created ");
    })
})
