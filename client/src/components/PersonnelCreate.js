import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StatusMessage from "./StatusMessage";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function PersonnelCreate() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [gender, setGender] = useState(null);
  const [species, setSpecies] = useState(null);
  const [affiliation, setAffiliation] = useState(null);
  const [statusNum, setStatusNum] = useState(0);
  // 0 = nothing
  // 1 = success
  // 2 = network error
  // 3 = user error

  const addPersonnel = () => {
    setGender(gender.toUpperCase());
    Axios.post("/create", {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      species: species,
      affiliation: affiliation,
    }).then((res) => {
      let result = res.data;
      if (result.localeCompare("success") === 0) {
        setStatusNum(1);
        console.log("Success");
        // clear input forms
        let forms = document.getElementsByClassName("input");
        for (let i = 0; i < forms.length; i++) {
          forms.item(i).value = "";
        }
      } else {
        setStatusNum(3)
        console.log("Error");
      }
    }).catch(err => {
      console.log("Error");
      setStatusNum(2);
    });
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
      <StatusMessage statusNum={statusNum}/>
    </div>
  );
}

export default PersonnelCreate;
