/**
 * Created by Omkar Dusane on 25-Feb-16.
 */

var express = require('express');
var router = express.Router();

var conn = require('./config/connection.js');
var db = conn.get();

/************    SELECTIONS and PROJECTIONS    **********/

router.get('/getAreas',function(req,res){
    var f = {};
    f['name'] = 1;
    db.area.find({},f).toArray(function(err, docs) {
        res.json({ok:true,list:docs});
    });
});

/******************** sample ****************/
router.get('/',function(req,res){
    res.send("please go away");
});

module.exports = router;
