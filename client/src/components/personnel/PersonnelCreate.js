import { useState } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StatusMessage from "../StatusMessage";

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
    Axios.post("/createPersonnel", {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      species: species,
      affiliation: affiliation,
    })
      .then((res) => {
        let result = res.data;
        if (result.localeCompare("success") === 0) {
          setStatusNum(1);
          console.log("Success");
          // clear input forms
          let forms = document.getElementsByClassName("input");
          for (let i = 0; i < forms.length; i++) {
            forms.item(i).value = "";
          }
          setFirstName(null);
          setLastName(null);
          setGender(null);
          setSpecies(null);
          setAffiliation(null);
        } else {
          setStatusNum(3);
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log("Error");
        setStatusNum(2);
      });
  };

  return (
    <div className="align">
      <p className="instructions">
        Create a personnel entry here. Enter a first and last name, gender,
        species, and affiliation. The "gender" field must take one of 'm' (for
        male), 'f' (for female), or 'o' (for other/non-binary). Note that this
        field is not case-sensitive, but the others are.
      </p>
      <p className="instructions">
        Arguments cannot 1) be empty, 2) be more than 45 characters long, and/or
        3) start with a SPACE. Prohibited characters include: @ # $ % ^ & * ( )
        [ ] {} ; : ' " / \ ,
      </p>
      <div id="prompts-container" className="align">
        <Form.Label className="prompt-label">
          <b>First Name</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setFirstName(event.target.value);
            setStatusNum(0);
          }}
        />
        <Form.Label className="prompt-label">
          <b>Last Name</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setLastName(event.target.value);
            setStatusNum(0);
          }}
        />
        <Form.Label className="prompt-label">
          <b>Gender</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setGender(event.target.value);
            setStatusNum(0);
          }}
        />
        <Form.Label className="prompt-label">
          <b>Species</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setSpecies(event.target.value);
            setStatusNum(0);
          }}
        />
        <Form.Label className="prompt-label">
          <b>Affiliation</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setAffiliation(event.target.value);
            setStatusNum(0);
          }}
        />
      </div>
      <div id="add-item">
        <Button variant="success" onClick={addPersonnel}>
          Add Personnel
        </Button>
      </div>
      <StatusMessage statusNum={statusNum} />
    </div>
  );
}

export default PersonnelCreate;
