const express =require('express');
const app = express();
const users=require('./users');

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to homepage");
})

app.get("/users", (req, res) => {
    const newuser=users.map((user) =>{
        return user.first_name;
    } )
    console.log(newuser)
    res.send(newuser)
})

app.listen(2222, () => {
    console.log("Listning to port 2222")
})