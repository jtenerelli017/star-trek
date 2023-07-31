import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StatusMessage from "./StatusMessage";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function StarshipCreate() {
  const [shipReg, setShipReg] = useState(null);
  const [shipName, setShipName] = useState(null);
  const [shipClass, setShipClass] = useState(null);
  const [statusNum, setStatusNum] = useState(0);
  // 0 = nothing
  // 1 = success
  // 2 = network error
  // 3 = user error
  // 4 = data already exists

  const addPersonnel = () => {
    Axios.post("/createStarship", {
      ship_reg: shipReg,
      ship_name: shipName,
      ship_class: shipClass,
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
          setShipReg(null);
          setShipName(null);
          setShipClass(null);
        } else if (result.localeCompare("exists") === 0) {
          setStatusNum(4);
          console.log("Error");
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
    <div id="personnel-container" className="align">
      <p className="instructions">
        Create a new entry for a starship here. The registry must be unique and
        less than or equal to 10 characters long.
      </p>
      <p className="instructions">
        Arguments cannot 1) be empty, 2) be more than 45 characters long, and/or
        3) start with a SPACE. Prohibited characters include: @ # $ % ^ & * ( )
        [ ] {} ; : ' " / \ ,
      </p>
      <div id="prompts-container" className="align">
        <Form.Label className="prompt-label">
          <b>Registry</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setShipReg(event.target.value);
            setStatusNum(0);
          }}
        />
        <Form.Label className="prompt-label">
          <b>Name</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setShipName(event.target.value);
            setStatusNum(0);
          }}
        />
        <Form.Label className="prompt-label">
          <b>Class</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setShipClass(event.target.value);
            setStatusNum(0);
          }}
        />
      </div>
      <div id="add-item">
        <Button variant="success" onClick={addPersonnel}>
          Add Starship
        </Button>
      </div>
      <StatusMessage statusNum={statusNum} />
    </div>
  );
}

export default StarshipCreate;
