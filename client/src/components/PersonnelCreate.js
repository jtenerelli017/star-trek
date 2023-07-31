import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function PersonnelCreate() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [gender, setGender] = useState(null);
  const [species, setSpecies] = useState(null);
  const [affiliation, setAffiliation] = useState(null);

  const addPersonnel = () => {
    let blacklist = "@#$%^&*()[]{};:\'\"/,";
    let arr = [firstName, lastName, gender, species, affiliation];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (blacklist.includes(arr[i].charAt(j))) {
          console.log("Error");
          return(-1);
        }
      }
    }
    let g = gender.toUpperCase();
    if (g.localeCompare("M") !== 0 && g.localeCompare("F") !== 0 && g.localeCompare("O") !== 0) {
      console.log("Error");
      return(-1);
    }
    setGender(gender.toUpperCase());
    Axios.post("/create", {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      species: species,
      affiliation: affiliation,
    }).then((res) => {
      let success = "Success";
      let result = res.data;
      if (result.localeCompare(success) === 0) {
        console.log(res.data);
        let forms = document.getElementsByClassName("input");
        for (let i = 0; i < forms.length; i++) {
          forms.item(i).value = "";
        }
      } else {
        console.log(res.data);
      }
    }).catch(err => console.log(err.message));
  };

  return (
    <div className="personnel-container">
        <div className="prompts-container">
        <Form.Label className="prompt-label"><b>First Name</b></Form.Label>
        <Form.Control className="input"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <Form.Label className="prompt-label"><b>Last Name</b></Form.Label>
        <Form.Control className="input"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <Form.Label className="prompt-label"><b>Gender</b></Form.Label>
        <Form.Control className="input"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />
        <Form.Label className="prompt-label"><b>Species</b></Form.Label>
        <Form.Control className="input"
          onChange={(event) => {
            setSpecies(event.target.value);
          }}
        />
        <Form.Label className="prompt-label"><b>Affiliation</b></Form.Label>
        <Form.Control className="input"
          onChange={(event) => {
            setAffiliation(event.target.value);
          }}
        />
      </div>
      <div className="add-item">
        <Button variant="success" onClick={addPersonnel}>
          Add Personnel
        </Button>
      </div>
    </div>
  );
}

export default PersonnelCreate;
