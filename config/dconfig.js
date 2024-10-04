const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();

const connectdb=async ()=>{
     try {
        await mongoose.connect(process.env.DATABASE_URL);
     } catch (error) {
        console.log(error);
     }
   
}
module.exports=connectdb;