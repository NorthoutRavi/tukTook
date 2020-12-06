let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Welcome Friends...")
})

app.get("/users",(req,res)=>{
    res.send([
        {id:1,name:"Ravi",age:"32",city:"Indore"},
        {id:2,name:"Amit",age:"40",city:"Pune"},
        {id:3,name:"Vipin",age:"35",city:"Hyderabad"}
    ])
})

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);