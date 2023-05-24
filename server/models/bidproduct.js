const mongoose =require("mongoose");

const bp1=new mongoose.Schema({
    
    bId:{
        type: String,
        required:true,
        default:'cust'
    },
    bAmount:{
        type: Number,
        required:true,
        default:0
    },
    
});

const bp2=new mongoose.Schema({
    
    bId:{
        type: String,
        required:true,
        default:'cust'
    },
    bAmount:{
        type: Number,
        required:true,
        default:0
    },
    
});

const bp3=new mongoose.Schema({
    
    bId:{
        type: String,
        required:true,
        default:'cust'
    },
    bAmount:{
        type: Number,
        required:true,
        default:0
    },
    
});

const bp4=new mongoose.Schema({
    
    bId:{
        type: String,
        required:true,
        default:'cust'
    },
    bAmount:{
        type: Number,
        required:true,
        default:0
    },
    
});

const bp5=new mongoose.Schema({
    
    bId:{
        type: String,
        required:true,
        default:'cust'
    },
    bAmount:{
        type: Number,
        required:true,
        default:0
    },
    
});

const bidp1=mongoose.model("bp1",bp1);
const bidp2=mongoose.model("bp2",bp2);
const bidp3=mongoose.model("bp3",bp3);
const bidp4=mongoose.model("bp4",bp4);
const bidp5=mongoose.model("bp5",bp5);
module.exports={
    bidp1,bidp2,bidp3,bidp4,bidp5
};