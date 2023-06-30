const express = require("express");
const router = express.Router();

router.get("/",(req,res,next) =>{
    try{
    res.json({msg : "Hello From API"});
    }catch(err){
        next(err);
    }
});

router.post("/form",(req,res,next) =>{
    res.json({msg:"Hello From APi"});
});

module.exports= router;