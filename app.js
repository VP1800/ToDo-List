const  express = require("express");
const bodyParser = require("body-parser");
var app= express();
app.set("views engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");
const trySchema = new mongoose.Schema({
    name:String
});
const item = mongoose.model("task",trySchema);
const todo = new item({
    name:"Create some videos"
});
const todo2 = new item({
    name:"learn DSA"
});
const todo3 = new item({
    name:"learn react"
});
const todo4 = new item({
    name:"Take some rest"
});
 todo.save();
// todo2.save();
// todo3.save();
// todo4.save();
app.get("/",async function(req,res){
    item.find({},function(err,foundItems){
        if(err){
            console.log(err);
        }
        else{
            res.render("list",{dayej : foundItems});
        }
    });
});
app.listen(3000,function(){
    console.log("server started");
});
