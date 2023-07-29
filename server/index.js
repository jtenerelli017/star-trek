const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Illuminatiuh3h36',
    database: "star_trek"
});

app.post('/create', (req, res) => {
    
})

app.listen(3001, ()=> {
    console.log("Server running on port 3001");
})