import { useState, useRef } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StatusMessage from "../StatusMessage";

function PersonnelDestroy() {
  const idRef = useRef();
  const [statusNum, setStatusNum] = useState(0);
  // 0 = nothing
  // 1 = success
  // 2 = network error
  // 3 = user error
  // 7 = data does not exist
  // anything else = unknown error

  const delPersonnel = () => {
    Axios.delete("/destroyPersonnel", {
      params: {
        id: idRef.current.value
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
        Delete a personnel entry here. Enter a personnel ID that already exists in the database, and press the button to delete it.
      </p>
      <p className="instructions">
        Arguments cannot 1) be empty, 2) be more than 45 characters long, and/or
        3) start with a SPACE. Prohibited characters include: @ # $ % ^ & * ( )
        [ ] {} ; : ' " / \ ,
      </p>
      <p className="instructions">
        An input ID also must be a positive integer and cannot have a leading zero.
      </p>
      <div id="prompts-container" className="align">
        <Form.Label className="prompt-label">
          <b>Personnel ID</b>
        </Form.Label>
        <Form.Control
          className="input"
          ref={idRef}
        />
      </div>
      <div id="add-item">
        <Button variant="danger" onClick={delPersonnel}>
          Delete Personnel
        </Button>
      </div>
      <StatusMessage statusNum={statusNum} />
    </div>
  );
}

export default PersonnelDestroy;
