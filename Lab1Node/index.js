/*
Jesús Horacio Rojas Cortés A01020026
Alejandra Tubilla Castellanos A01022960
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.static('public'));
//Body parser for have body element in req
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//Route to receive the clicked element
app.post('/clicked',function(req,res){
  var item=req.body.value;
  console.log("Clicked element:",item);//Log clicked element
  res.end("yes");
});
app.listen(port, () => console.log("App listening"));
