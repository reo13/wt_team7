var express = require('express');
console.log("Hello");
var server = new express();
server.get('/',function(req,res){
	res.send('hello you');
})
server.listen(8000,function(){
console.log('listening on localhost:8000')})
