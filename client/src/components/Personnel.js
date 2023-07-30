import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Personnel() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [gender, setGender] = useState(null);
  const [species, setSpecies] = useState(null);
  const [affiliation, setAffiliation] = useState(null);

  const addPersonnel = () => {
    Axios.post("/create", {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      species: species,
      affiliation: affiliation,
    }).then(() => {
      console.log("Success!");
    });
  };

  return (
    <div className="personnel-container">
      <div>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton id="tbg-radio-1" value={1}>
            Create
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value={2}>
            Read
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" value={3}>
            Update
          </ToggleButton>
          <ToggleButton id="tbg-radio-4" value={4}>
            Destroy
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="prompts-container">
        <Form.Label class="prompt-label"><b>First Name</b></Form.Label>
        <Form.Control
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <Form.Label class="prompt-label"><b>Last Name</b></Form.Label>
        <Form.Control
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <Form.Label class="prompt-label"><b>Gender</b></Form.Label>
        <Form.Control
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />
        <Form.Label class="prompt-label"><b>Species</b></Form.Label>
        <Form.Control
          onChange={(event) => {
            setSpecies(event.target.value);
          }}
        />
        <Form.Label class="prompt-label"><b>Affiliation</b></Form.Label>
        <Form.Control
          onChange={(event) => {
            setAffiliation(event.target.value);
          }}
        />
      </div>
      <div class="add-item">
        <Button variant="primary" onClick={addPersonnel}>
          Add Personnel
        </Button>
      </div>
    </div>
  );
}

export default Personnel;
