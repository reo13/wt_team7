var express = require('express');
var app = express();
var dbconn = require('./api/config/connection.js')

app.use('/', express.static('public'))
app.use('/ops', express.static('ops_site'))
dbconn.connect(function(){
  var r_api = require('./api/r_api');
  app.use('/api/',r_api);

  app.listen(1337,function(){
    console.log("listening on 1337");
  });
});
