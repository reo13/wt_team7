
var mongoose = require('mongoose');
var mrl = 'mongodb://127.0.0.1:27017/test_1';
var db = false;
let databaseConnection = false;

function connectNow(next){
    mongoose.connect(mrl);
    db = mongoose.connection ;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
        databaseConnection = {};
        databaseConnection.users = db.collection('users');
        databaseConnection.area = db.collection('area');
        databaseConnection.constants = {sample:'hello'};
        console.log('got db connection: ',(databaseConnection!=false));
        next();
    });
};


module.exports = {
  connect: connectNow,
  get : ()=>{
    return databaseConnection
  }
} ;
