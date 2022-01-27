const express=require("express")
const PORT=5000;
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();


const productRoute=require("./routes/product")
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
const cors=require("cors")
 const authRoute=require("./routes/auth")
 const userRoute=require("./routes/user")

const db="mongodb://localhost:27017/mongostore";
const connectDB=async()=>{
    try{
        await mongoose.connect(db,{useNewUrlParser:true});
        console.log("mongoDB connected");
    }
    catch(err){
        console.log(err.message);
    }
}
connectDB();


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
 app.use("/api/products",productRoute)
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);




app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log(`work on ${PORT}`)
})