const express = require("express");
const mysql2 = require("mysql2");
const app = express();

app.use(express.json)

const connection = mysql2.createConnection({
host: "localHost",
user: "root",
password: ""
})

const sql = 'INSERT INTO products(name, descrption, price) VALUES('${name}', '${desc}', '${price}')'

connection.query(sql, (error, results) => {
    if(error){
        console.log(error);
    }

    console.log(results);
})

connection.connect((error))

app.post("/produtos", (req, res) =>{
     const {
        name,
        desc,
        price
    } = request.body
});

