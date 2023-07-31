const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 3001;

// I use this line to avoid an server error
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "star_trek",
});

app.post("/create", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const gender = req.body.gender;
  const species = req.body.species;
  const affiliation = req.body.affiliation;

  db.query(
    "INSERT INTO personnel (first_name, last_name, gender, species, affiliation) VALUES (?, ?, ?, ?, ?)",
    [first_name, last_name, gender, species, affiliation],
    (err, result) => {
      if (err) {
        res.send("Error");
      } else {
        res.send("Success");
      }
    }
  );
});

app.listen(port, () => {
  console.log("Server running on port 3001");
});
