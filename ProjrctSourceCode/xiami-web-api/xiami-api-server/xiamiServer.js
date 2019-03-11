const express =require("express")
const  fs =require("fs")
const app = express();
app.use(express.static('../../xiami-web-code'));
app.all("*",function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","content-type");
	res.header("Access-Control-Allow-Methods","PUT,DELETE,GET,POST,OPTIONS");

	next();
})
app.get("/discover",function(req,res){
	res.json(
		require("./dataforXiami/discover.json")
	)
})
app.get("/my",function(req,res){
	res.json(
		require("./dataforXiami/myMusic.json")
	)
})
app.get("/blog",function(req,res){
	res.json(
		require("./dataforXiami/musicBlog.json")
	)
})
app.get("/me",function(req,res){
	res.json(
		require("./dataforXiami/personals.json")
	)
})

app.listen(888,function(){
	console.log("success for xiami servers!")
})