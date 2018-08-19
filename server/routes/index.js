var express = require('express');
var router = express.Router();
var sendToDialogflow=require('../utility/dialogflow');

var  YTSearch =require('youtube-api-search')
const API_KEY="AIzaSyBnNG9DTuyDu3AJVYh4vXwOKr8A8h2QtJk";

/* GET home page. */
router.get('/getresponse', function(req, res, next) {
 
  let query= req.query.querytext;
  sendToDialogflow(query)
  .then(restext=>
  {
    console.log("*******************************")
    console.log("node backend received response");
    console.log(restext)
    console.log("*******************************")
    res.status(200)
    res.send(restext);

  })
  .catch(err=>{
      res.send("Dialogflow webhook not configured");
  });

});
router.post('/webhook',(req,res,next)=>{
  console.log("************************webhook recived request******************************")
  console.log(JSON.stringify(req.body))



  if(req.body.queryResult.intent.displayName==='option' || req.body.queryResult.intent.displayName==='welcome followup'){
      YTSearch({key:API_KEY,term:req.body.queryResult.parameters.song}
        ,(data)=>{
          var tem={msg:"Updating the video list."+req.body.queryResult.fulfillmentText}
          tem.payload=data;
          console.log("*******************************")
          console.log("webhook sended response");
          console.log(JSON.stringify({"fulfillmentText":JSON.stringify(tem)}))
          console.log("*******************************")
          res.send({"fulfillmentText":JSON.stringify(tem)});
        }
        );
      }
      else if(req.body.queryResult.intent.displayName==='specific song'){
        console.log("specific song")
        var tem={msg:req.body.queryResult.fulfillmentText}
        var no=req.body.queryResult.parameters.number||req.body.queryResult.parameters.ordinal;
        no=no>5?5:no;
        no=no<1?1:no;
        tem.specificsong=no-1;
        res.send({"fulfillmentText":JSON.stringify(tem)});
      }
    else{
      res.send(200);
    }
  
})

module.exports = router;
