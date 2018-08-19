var express=require('express');
var path=require('path');
var app=express();
var logger = require('morgan');
var indexRouter = require('./routes/index');

const port=process.env.PORT||8080


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname,"..","dist")));

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Method", "*");
    if(req.method=="OPTIONS"){
      return res.send(200);
    }
    next();
  }
  )

app.use('/chatbot', indexRouter);
app.get("/key",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"..","youtubechat-2d69bcdf86ec.json"))
})

app.get("*",(req,res)=>{
   // console.log("default path")
    res.sendFile(path.resolve(__dirname,"..","dist/index.html"))
})
app.listen(port);
console.log("server listning at"+port);