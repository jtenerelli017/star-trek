import { useState } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StatusMessage from "../StatusMessage";

function RosterCreate() {
  const [starshipReg, setStarshipReg] = useState(null);
  const [personnelId, setPersonnelId] = useState(null);
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [reason, setReason] = useState(null);
  const [statusNum, setStatusNum] = useState(0);
  // 0 = nothing
  // 1 = success
  // 2 = network error
  // 3 = user error
  // 4 = data already exists

  const addRoster = () => {
    Axios.post("/createRoster", {
      starship_reg: starshipReg,
      personnel_id: personnelId,
      date_start: dateStart,
      date_end: dateEnd,
      reason: reason,
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
          setStarshipReg(null);
          setPersonnelId(null);
          setDateStart(null);
          setDateEnd(null);
          setReason(null);
        } else {
          setStatusNum(3);
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log(err);
        setStatusNum(2);
      });
  };

  return (
    <div id="personnel-container" className="align">
      <p className="instructions">
        Create a starship roster entry here. Personnel ID and starship
        registries must already exist. Starting date must be unique per
        personnel/registry pair. Ending date and reason can be empty. Dates must
        be in "Star Date" format (i.e. 42117.3).
      </p>
      <p className="instructions">
        Arguments cannot 1) be empty, 2) be more than 45 characters long, and/or
        3) start with a SPACE (unless the field is allowed to be empty).
        Prohibited characters include: @ # $ % ^ & * ( ) [ ] {} ; : ' " / \ ,
      </p>
      <div id="prompts-container" className="align">
        <Form.Label className="prompt-label">
          <b>Starship Registry</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setStarshipReg(event.target.value);
            setStatusNum(0);
          }}
        />
        <Form.Label className="prompt-label">
          <b>Personnel ID</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setPersonnelId(event.target.value);
            setStatusNum(0);
          }}
        />
        <Form.Label className="prompt-label">
          <b>Starting Date</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setDateStart(event.target.value);
            setStatusNum(0);
          }}
        />
        <Form.Label className="prompt-label">
          <b>Ending Date</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setDateEnd(event.target.value);
            setStatusNum(0);
          }}
        />
        <Form.Label className="prompt-label">
          <b>Reason</b>
        </Form.Label>
        <Form.Control
          className="input"
          onChange={(event) => {
            setReason(event.target.value);
            setStatusNum(0);
          }}
        />
      </div>
      <div id="add-item">
        <Button variant="success" onClick={addRoster}>
          Add Roster
        </Button>
      </div>
      <StatusMessage statusNum={statusNum} />
    </div>
  );
}

export default RosterCreate;
