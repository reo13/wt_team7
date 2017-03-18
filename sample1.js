var express = require('express');
var bodyParser = require('body-parser');
var server = new express();
server.use(bodyParser());
var homeListener = function(req,res){
  res.send('hello you , welcome to homeListener')
};
server.get('/',homeListener);
server.get('/search', function(req,res){
 console.log(req.query);	
 var in_var = Number(req.query.var1) ;
 
 res.json({ok:true,message:'Square is '+(in_var*in_var)})
  
})

server.listen(8000,function(){
	console.log('Listening on localhost:8000')
})