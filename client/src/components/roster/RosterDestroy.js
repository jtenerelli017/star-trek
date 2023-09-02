import { useState, useRef } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StatusMessage from "../StatusMessage";

function RosterDestroy() {
  const starshipRegRef = useRef();
  const personnelIdRef = useRef();
  const dateStartRef = useRef();
  const [statusNum, setStatusNum] = useState(0);
  // 0 = nothing
  // 1 = success
  // 2 = network error
  // 3 = user error
  // 7 = data does not exist
  // anything else = unknown error

  const delRoster = () => {
    Axios.delete("/destroyRoster", {
      params: {
        starship_reg: starshipRegRef.current.value,
        personnel_id: personnelIdRef.current.value,
        date_start: dateStartRef.current.value
      }
    })
      .then((res) => {
        let result = res.data;
        if (result.localeCompare("unknown") === 0) {
          setStatusNum(-1);
        } else if (result.localeCompare("illegal") === 0) {
          setStatusNum(3);
        } else if (result.localeCompare("success") === 0) {
          let forms = document.getElementsByClassName("input");
          for (let i = 0; i < forms.length; i++) {
            forms.item(i).value = "";
          }
          setStatusNum(1);
        } else {
          setStatusNum(7);
        }
      })
      .catch((err) => {
        console.log(err);
        setStatusNum(2);
      });
  };

  return (
    <div className="align">
      <p className="instructions">
        Delete a starship roster entry here. Enter a registry, personnel ID, and starting date that already exists in the database, and press the button to delete it.
      </p>
      <p className="instructions">
        Arguments cannot 1) be empty, 2) be more than 45 characters long, and/or
        3) start with a SPACE. Prohibited characters include: @ # $ % ^ & * ( )
        [ ] {} ; : ' " / \ ,
      </p>
      <div id="prompts-container" className="align">
        <Form.Label className="prompt-label">
          <b>Starship Registry</b>
        </Form.Label>
        <Form.Control
          className="input"
          ref={starshipRegRef}
        />
        <Form.Label className="prompt-label">
          <b>Personnel ID</b>
        </Form.Label>
        <Form.Control
          className="input"
          ref={personnelIdRef}
        />
        <Form.Label className="prompt-label">
          <b>Starting Date</b>
        </Form.Label>
        <Form.Control
          className="input"
          ref={dateStartRef}
        />
      </div>
      <div id="add-item">
        <Button variant="danger" onClick={delRoster}>
          Delete Roster
        </Button>
      </div>
      <StatusMessage statusNum={statusNum} />
    </div>
  );
}

export default RosterDestroy;
