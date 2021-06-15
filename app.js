const express = require("express");
const app = express();
const date = require(__dirname + "/date.js")

const items = ["Review Finance", "Learn Computer Science", "Apply Computer Science"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", function (req, res) {
  //moved to date.js
  // let options = {
  //   weekday: 'long',
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric'
  // };
  // let today = new Date();
  // let day = today.toLocaleDateString("en-US", options); 

  let day = date.getDate();
  res.render("list", {listTitle: day, newItems: items});
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newItems: workItems})
})

app.get("/about",function(req,res){
  res.render("about");
})

app.post("/", function (req, res) {
if(req.body.list === "Work"){
  workItems.push(req.body.newItemInput);
  console.log("redirected to work " + req.body);
  res.redirect("/work")
} else{
  items.push(req.body.newItemInput);
  console.log(req.body);
  res.redirect("/")
}
});

app.post("/work", function(req, res){
  workItems.push(req.body.newItemInput);
  redirect("/work");
})

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
