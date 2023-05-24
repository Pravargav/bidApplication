const mongoose =require("mongoose");

const productSchema=new mongoose.Schema({
    pId:{
        type: Number,
        required:true
    },
    pName:{
        type: String,
        required:true
    },
    pPrice:{
        type: Number,
        required:true
    },
    pImage:{
        type: String,
        required:true
    }
});

const pt=mongoose.model("pt",productSchema);
module.exports=pt;