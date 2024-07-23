const express = require("express");
const app = express();
const port = 8888;

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

const users =[
  {id:1, name:'ram', age:20, isStudent:true,hobbies:['swimming','reading', 'coding'],address:{street:'123 Main st', city:'Anytown',country:'USA'}, favouriteNumbers:[7,42,88],status:null},
  {id:2, name:'ram', age:20, isStudent:true,hobbies:['swimming','reading', 'coding'],address:{street:'123 Main st', city:'Anytown',country:'USA'}, favouriteNumbers:[7,42,88],status:null},
  {id:3, name:'ram', age:20, isStudent:true,hobbies:['swimming','reading', 'coding'],address:{street:'123 Main st', city:'Anytown',country:'USA'}, favouriteNumbers:[7,42,88],status:null},

]
app.get("/getUsers", (req, res) => {
  res.json(users);
});

app.get("/getUsers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user= users.find(user => user.id === id);
  if(user){
    res.json(user);
  }else{
    res.status(404).json({message: "User not found"});
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

