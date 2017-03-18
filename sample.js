var http = require('http');
var express = require('express');
var app = express();

// app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    var options = {
        hostname: "search.mysite.com",
        path: '/search?site=hub&client=hub_frontend&output=xml_no_dtd&q=cats'
    };

    var gsaReq = http.get(options, function (response) {
        var completeResponse = '';
        response.on('data', function (chunk) {
            completeResponse += chunk;
        });
        response.on('end', function() {
            console.log(completeResponse);
        })
    }).on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });

});

app.listen(3000);

