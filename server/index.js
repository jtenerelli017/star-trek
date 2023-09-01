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
  let blacklist = "@#$%^&*()[]{};:'\"/\\,";
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === null ||
      arr[i].length === 0 ||
      arr[i].charAt(0).localeCompare(" ") === 0
    ) {
      console.log("ERROR: Invalid argument(s).");
      return false;
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (blacklist.includes(arr[i].charAt(j))) {
        console.log("ERROR: Invalid argument(s).");
        return false;
      }
    }
  }
  return true;
};

const reasonIsLegal = (str) => {
  if (str === null) {
    return true;
  }
  if (str.charAt(0).localeCompare(" ") === 0) {
    console.log("ERROR: Invalid argument(s).");
    return false;
  }
  let blacklist = "@#$%^&*()[]{};:'\"/\\,";
  for (let i = 0; i < str.length; i++) {
    if (blacklist.includes(str.charAt(i))) {
      console.log("ERROR: Invalid argument(s).");
      return false;
    }
  }
  return true;
};

app.post("/createPersonnel", (req, res) => {
  console.log("Request to " + req.url);

  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const gender = req.body.gender;
  const species = req.body.species;
  const affiliation = req.body.affiliation;

  let g = null;
  if (gender !== null) {
    g = gender.toUpperCase();
  }
  if (!isLegal([first_name, last_name, gender, species, affiliation])) {
    res.send("error");
  } else if (
    g.localeCompare("M") !== 0 &&
    g.localeCompare("F") !== 0 &&
    g.localeCompare("O") !== 0
  ) {
    res.send("error");
  } else
    db.query(
      "INSERT INTO personnel (first_name, last_name, gender, species, affiliation) VALUES (?, ?, ?, ?, ?)",
      [first_name, last_name, g, species, affiliation],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          console.log(result);
          res.send("success");
        }
      }
    );
});

app.post("/createStarship", (req, res) => {
  console.log("Request to " + req.url);

  const ship_reg = req.body.ship_reg;
  const ship_name = req.body.ship_name;
  const ship_class = req.body.ship_class;

  if (!isLegal([ship_reg, ship_name, ship_class])) {
    res.send("error");
  } else
    db.query(
      "INSERT INTO starship_data (registry, name, class) VALUES (?, ?, ?)",
      [ship_reg, ship_name, ship_class],
      (err, result) => {
        if (err) {
          console.log(err);
          if (err.code.localeCompare("ER_DUP_ENTRY") === 0) {
            console.log("exists");
            res.send("exists");
          } else {
            res.send("error");
          }
        } else {
          console.log(result);
          res.send("success");
        }
      }
    );
});

app.post("/createRoster", (req, res) => {
  console.log("Request to " + req.url);

  const starship_reg = req.body.starship_reg;
  const personnel_id = req.body.personnel_id;
  const date_start = req.body.date_start;
  const date_end = req.body.date_end;
  const reason = req.body.reason;

  if (!isLegal([starship_reg, personnel_id, date_start])) {
    res.send("error");
  } else if (!reasonIsLegal(date_end) && !reasonIsLegal(reason)) {
    res.send("error");
  } else
    db.query(
      "INSERT INTO starship_roster (starship_reg, personnel_id, date_start, date_end, reason) VALUES (?, ?, ?, ?, ?)",
      [starship_reg, personnel_id, date_start, date_end, reason],
      (err, result) => {
        if (err) {
          console.log(err);
          if (err.code.localeCompare("ER_DUP_ENTRY") === 0) {
            console.log("exists");
            res.send("exists");
          } else {
            res.send("error");
          }
        } else {
          console.log(result);
          res.send("success");
        }
      }
    );
});

app.get("/readFirstId", (req, res) => {
  console.log("Request to " + req.url);

  db.query("SELECT id FROM personnel LIMIT 0,1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/readNewId", (req, res) => {
  console.log("Request to " + req.url);

  const id = req.query.id;

  db.query("SELECT id FROM personnel WHERE id=?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/readPersonnelBiosName", (req, res) => {
  console.log("Request to " + req.url);

  const id = req.query.id;

  db.query("SELECT first_name, last_name FROM personnel WHERE id=?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/readPersonnelBiosCap", (req, res) => {
  console.log("Request to " + req.url);

  const id = req.query.id;

  db.query("SELECT * FROM personnel_rank WHERE personnel_id=? AND rank_id=5 AND date_dropped IS NULL", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/readPersonnelBios", (req, res) => {
  console.log("Request to " + req.url);

  db.query("SELECT * FROM personnel", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/readPersonnelHist", (req, res) => {
  console.log("Request to " + req.url);

  const id = req.query.id;

  db.query("SELECT * FROM starship_roster WHERE personnel_id=?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/readPersonnelLogs", (req, res) => {
  console.log("Request to " + req.url);

  const id = req.query.id;

  db.query("SELECT * FROM captain_log_data WHERE captain_id=?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/readPersonnelShip", (req, res) => {
  console.log("Request to " + req.url);
  
  const id = req.query.id;

  db.query("SELECT * FROM captain_log_data WHERE captain_id=?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log("Server running on port 3001");
});
