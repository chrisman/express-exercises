var jade = require('jade')
var express = require('express')

var app = express()
app.set('view engine', 'jade')
var fromjade = jade.compileFile('views/index.jade')
var myport = process.argv[2] || 3000

var vegetablesPizza = [
  "mushrooms",
  "onions",
  "green pepper",
  "jalapeno",
  "spinach"
]

app.get("/", function(req, res){
  res.send("hello world!")
})
app.get('/hello/:name', function(req, res){
  res.send("<h2>HELLO " + req.params.name.toUpperCase() + "!</h2><p>this is a demonstration of <em>url parameters.</em></p>")
})
app.get('/hi', function(req, res){
  res.send("<h2>Hi, " + (req.query.name || 'Human') + "</h2><p>This is <em>query parameters.</em></p>")
})

app.get("/best-dog-there-is", function(req, res){
  res.send("<h1>Harper Dog!</h1>")
})

app.get("/vegetables", function(req, res){
  res.send("the best ones for pizza are " + vegetablesPizza.join(" and "))
})

app.get('/meaning-of-life', function(req, res){
  res.send("<h1>42</h1><p>the meaning of life, the universe, and everything.</p>")
})

app.get('/jade', function(req, res){
  var myname = (req.query.name) ? req.query.name : 'our guests!'
  res.render('index', {name: myname})
})

app.listen(myport, function(){
  console.log("listening on port " + myport + "!");
})
