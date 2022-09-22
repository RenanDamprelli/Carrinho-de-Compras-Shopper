const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "shopper",
});

app.use(cors());

app.use(express.json());

app.post("/register", (req, res) =>{

    const {name} = req.body;
    const {price} = req.body;
    const {qty_stock} = req.body;

    let SQL = "INSERT INTO produto(name, price, qty_stock) VALUES(?, ?, ?)";

    db.query(SQL, [name, price, qty_stock] ,(err, result) =>{
        console.log(err);
    });
});


app.get("/getCards", (req, res) =>{

    let SQL = "SELECT*FROM produto";

    db.query(SQL, (err, result)=>{
        if(err) console.log(err)
        else res.send(result);
    });
});


app.listen(3001,() =>{
    console.log("Rodando!!!");
});