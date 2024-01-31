const mongoose=require("mongoose");
const {Schema}=mongoose;
const LastSchema= new Schema({
   
   
    email:{
        type:String,
        required:true
    },
   data:{
    type:Array,
    required:true
   }
});
module.exports=mongoose.model('Last',LastSchema )