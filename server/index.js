const mongoose=require("mongoose");
const cors=require('cors');
const express=require("express");
const app=express();
const productModel=require("./models/product");
const bidModel=require("./models/bidproduct");
app.use(express.json());
app.use(cors());



mongoose.connect("mongodb+srv://flashner:flashnerxyz@cluster0.iiianrk.mongodb.net/cllgd1?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});

app.get('/insert',async (req,res)=>{
  const p1=new productModel({
    pId: 1,
    pName: "Apple IPhone",
    pPrice: 999.0,
    pImage: "https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80",
  });
  const p2=new productModel({
    pId: 2,
    pName: "Macbook Pro ",
    pPrice: 1999.0,
    pImage: "https://upload.wikimedia.org/wikipedia/commons/a/a8/MacBook_Air_on_table_%28cropped%29.jpg",
  });
  const p3=new productModel({
    pId: 3,
    pName: "Apple airpods",
    pPrice: 169.0,
    pImage: "https://www.zdnet.com/a/img/resize/5b74816409be05bc5d919cc8222c876b1db3ac7c/2022/09/22/92cbda52-2e51-4e62-99b2-eca84b7e6d92/airpods-pro-2022.jpg?auto=webp&fit=crop&height=1200&width=1200",
  });
  const p4=new productModel({
    pId: 4,
    pName: "Apple ipad",
    pPrice: 749.0,
    pImage: "https://5.imimg.com/data5/SELLER/Default/2021/9/LK/UR/AX/8819839/ipad-air-blue-1000x1000.jpg",
  });
  const p5=new productModel({
    pId: 5,
    pName: "Apple watch",
    pPrice: 399.0,
    pImage: "https://cdn1.smartprix.com/rx-iz8tTENbj-w1200-h1200/z8tTENbj.jpg",
  });


  try {
    await p1.save();
    await p2.save();
    await p3.save();
    await p4.save();
    await p5.save();
    res.send("inserted!!");
  }
  catch(err){
   console.log(err);
  }
});




  app.post('/insertx',async (req,res)=>{
      
    const pId=req.body.pId;
    const amnt=req.body.amnt;
    const bidId=req.body.bId;
  
    if(pId==1){
      const bip1=new bidModel.bidp1({bId:bidId,bAmount:amnt});
      try {
        await bip1.save();
        res.send("insertxed!!");
      }
      catch(err){
       console.log(err);
      }
    }
    else if(pId==2){
      const bip2=new bidModel.bidp2({bId:bidId,bAmount:amnt});
      try {
        await bip2.save();
        res.send("insertxed!!");
      }
      catch(err){
       console.log(err);
      }
    }
    else if(pId==3){
      const bip3=new bidModel.bidp3({bId:bidId,bAmount:amnt});
      try {
        await bip3.save();
        res.send("insertxed!!");
      }
      catch(err){
       console.log(err);
      }
    }
    else if(pId==4){
      const bip4=new bidModel.bidp4({bId:bidId,bAmount:amnt});
      try {
        await bip4.save();
        res.send("insertxed!!");
      }
      catch(err){
       console.log(err);
      }
    }
    else if(pId==5){
      const bip5=new bidModel.bidp5({bId:bidId,bAmount:amnt});
      try {
        await bip5.save();
        res.send("insertxed!!");
      }
      catch(err){
       console.log(err);
      }
    }
    

  });


app.get('/read',async (req,res)=>{
    productModel.find({}).then(result=>{
        res.send(result);
    }).catch(err=>{
        res.send(err);
    })
  });

app.get('/readx1',async (req,res)=>{
    bidModel.bidp1.find({}).then(result=>{
        res.send(result);
    }).catch(err=>{
        res.send(err);
    })
  });
app.get('/readx2',async (req,res)=>{
    bidModel.bidp2.find({}).then(result=>{
        res.send(result);
    }).catch(err=>{
        res.send(err);
    })
  });
app.get('/readx3',async (req,res)=>{
    bidModel.bidp3.find({}).then(result=>{
        res.send(result);
    }).catch(err=>{
        res.send(err);
    })
  });
app.get('/readx4',async (req,res)=>{
    bidModel.bidp4.find({}).then(result=>{
        res.send(result);
    }).catch(err=>{
        res.send(err);
    })
  });
app.get('/readx5',async (req,res)=>{
    bidModel.bidp5.find({}).then(result=>{
        res.send(result);
    }).catch(err=>{
        res.send(err);
    })
  });



app.listen(8080,()=>{
console.log("server running on port 8080....");
});
