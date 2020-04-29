var express = require("express");
var path = require("path");
// var mysql = require("mysql")

var app = express();
var PORT = process.env.PORT || 3000
// var connection = mysql.createConnection({
//     host: "localhost",
  
//     port: 3306,
  
//     user: "root",

//     password: "Najih_56@Forna",
//     database: "favorite_db"
//   });

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

RTCPeerConnection.connect(function(err){
    if (err) throw err;
    console.log("Connected")
})

app.listen(3000,function(){
    console.log("Server on 3000")
})

app.get("/",function(req,res){
    res.sendfile(path.join(_dirname, "index.html"));
})

app.get("/notes",function(req,res){
    res.sendfile(path.join(_dirname, "notes.html"));
})

// module exports for routing for file inquiries
// write to file function for json in db folder

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });