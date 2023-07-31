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

const isLegal = (arr) => {
  let blacklist = "@#$%^&*()[]{};:\'\"/,";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (blacklist.includes(arr[i].charAt(j))) {
        console.log("Error: Illegal character detected");
        return(false);
      }
    }
  }
  return(true);
};

app.post("/create", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const gender = req.body.gender;
  const species = req.body.species;
  const affiliation = req.body.affiliation;

  let g = gender.toUpperCase();
  if (!isLegal([first_name, last_name, gender, species, affiliation])) {
    res.send("error");
  } else if (g.localeCompare("M") !== 0 && g.localeCompare("F") !== 0 && g.localeCompare("O") !== 0) {
    res.send("error");
  } else db.query(
    "INSERT INTO personnel (first_name, last_name, gender, species, affiliation) VALUES (?, ?, ?, ?, ?)",
    [first_name, last_name, gender, species, affiliation],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("error");
      } else {
        res.send("success");
      }
    }
  );
});

app.listen(port, () => {
  console.log("Server running on port 3001");
});
