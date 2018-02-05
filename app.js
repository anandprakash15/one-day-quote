var express = require('express');
var app = express();
var fs = require("fs");


app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});
var createStream = fs.createWriteStream("JournalDEV.txt");
createStream.write("Hi, JournalDEV Users. /n");
createStream.end();


var port = process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});
