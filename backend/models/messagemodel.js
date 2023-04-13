const mongoose=require("mongoose");
const messagemodel=mongoose.Schema(
{
 sender:{
    type: mongoose.Sschema.Type.ObjectId, ref: "User",
 },
 content:{
    type:String,
    trim:true
 },
 chat:{
    type: mongoose.Sschema.Type.ObjectId, ref: "Chat",
 }
},
{
    timestamp:true,
}
);
const Message=mongoose.model("Message",messagemodel);
module.exports=Message;