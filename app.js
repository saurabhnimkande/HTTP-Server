const express =require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to homepage");
})

app.get("/users", (req, res) => {
    let arr=[];
    req.body.forEach(user => arr.push(user.first_name));
    res.send(arr);
})

app.listen(2222, () => {
    console.log("Listning to port 2222")
})