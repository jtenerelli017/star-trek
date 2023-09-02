import { useState, useRef } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StatusMessage from "../StatusMessage";

function StarshipDestroy() {
  const registryRef = useRef();
  const [statusNum, setStatusNum] = useState(0);
  // 0 = nothing
  // 1 = success
  // 2 = network error
  // 3 = user error
  // 7 = data does not exist
  // anything else = unknown error

  const delStarship = () => {
    Axios.delete("/destroyStarship", {
      params: {
        registry: registryRef.current.value
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
        Delete a starship entry here. Enter a registry that already exists in the database, and press the button to delete it.
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
          ref={registryRef}
        />
      </div>
      <div id="add-item">
        <Button variant="danger" onClick={delStarship}>
          Delete Starship
        </Button>
      </div>
      <StatusMessage statusNum={statusNum} />
    </div>
  );
}

export default StarshipDestroy;
