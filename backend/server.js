const express=require("express");
const { chats } = require("./data/data");
const dotenv =require("dotenv");
const connectDB = require("./config/db");
const userRoutes=require("./routes/userRoutes");
dotenv.config();
connectDB();
const app=express();
const PORT = 5000;
app.use(express.json());// to accept json data
app.listen(PORT,console.log("server started at localhost 5000"))
app.get("/",(req,res)=>{
res.send("api is running")
});
// app.get("/api/chat",(req,res)=>{
//     res.send(chats)
// })
app.use("/api/user",userRoutes);
// here we created an end point 
