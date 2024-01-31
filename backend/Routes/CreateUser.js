const express=require('express')
const router=express.Router()
const User=require('../models/User')

router.post("/creatuser",async(req,res)=>{
    try{
      await User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        location:req.body.location
      })
      res.json({sucess:true})
    }catch(error){
       console.log(error)
       res.json({sucess:false});
    }
})



router.post("/loginuser",async(req,res)=>{
  let email=req.body.email;
  try{
    let userData=await User.findOne({email});
    if(!userData){
      return res.status(400).json({errors:"Try logging correctly"})
    }
    if(!req.body.password===userData.password){
      return res.status(400).json({errors:"Try logging correctly"})
    }
    if(req.body.password===userData.password){
     
    }
    return res.json({success:true})
    //navigate("/")

  }
  catch(error){
    console.log(error)
    res.json({sucess:false});
  }
})
module.exports=router;  