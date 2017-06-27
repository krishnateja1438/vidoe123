var express=require("express");
var app=express();

app.use(express.static(__dirname+'/public'));

app.get("/",function(req,res){
    res.send("haii");
});


app.get("/form",function(req,res){
//res.sendFile("./index.html");
res.sendFile(__dirname+'/index.html');
});


app.get("/form/submit",function(req,res)
{
var username=req.query.username;
var password=req.query.password;
console.log(username+' and '+password);
res.send("Username and password are:"+username + "Password:"+password);
  
    
});

//app.post("localhost:3000/form/submit/details",function(req,res)
//{
//var username=req.body.username;
//var password=req.body.password;
//console.log(username+' and '+password);
//res.json(username);
//res.json(password);
  
    
//});


app.listen(5005,function(){
console.log("running at 5005");
});