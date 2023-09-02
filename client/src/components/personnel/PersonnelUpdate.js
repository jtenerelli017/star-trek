import { useState, useRef } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StatusMessage from "../StatusMessage";

function PersonnelUpdate() {
  const idRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const genderRef = useRef();
  const speciesRef = useRef();
  const affiliationRef = useRef();
  const [statusNum, setStatusNum] = useState(0);
  // 0 = nothing
  // 1 = success
  // 2 = network error
  // 3 = user error
  // 7 = data does not exist
  // anything else = unknown error

  const updatePersonnel = () => {
    Axios.put("/updatePersonnel", {
      params: {
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
        gender: genderRef.current.value,
        species: speciesRef.current.value,
        affiliation: affiliationRef.current.value,
      }
    })
      .then((res) => {
        let result = res.data;
        if (result.localeCompare("success") === 0) {
          setStatusNum(1);
          // clear input forms
          let forms = document.getElementsByClassName("input");
          for (let i = 0; i < forms.length; i++) {
            forms.item(i).value = "";
          }
        } else if (result.localeCompare("illegal") === 0){
          setStatusNum(3);
        } else if (result.localeCompare("dne")){
          setStatusNum(7);
        }
      })
      .catch((err) => {
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
          <b>Personnel ID</b>
        </Form.Label>
        <Form.Control
          className="input"
          ref={idRef}
        />
        <Form.Label className="prompt-label">
          <b>First Name</b>
        </Form.Label>
        <Form.Control
          className="input"
          ref={firstNameRef}
        />
        <Form.Label className="prompt-label">
          <b>Last Name</b>
        </Form.Label>
        <Form.Control
          className="input"
          ref={lastNameRef}
        />
        <Form.Label className="prompt-label">
          <b>Gender</b>
        </Form.Label>
        <Form.Control
          className="input"
          ref={genderRef}
        />
        <Form.Label className="prompt-label">
          <b>Species</b>
        </Form.Label>
        <Form.Control
          className="input"
          ref={speciesRef}
        />
        <Form.Label className="prompt-label">
          <b>Affiliation</b>
        </Form.Label>
        <Form.Control
          className="input"
          ref={affiliationRef}
        />
      </div>
      <div id="add-item">
        <Button variant="warning" onClick={updatePersonnel}>
          Update Personnel
        </Button>
      </div>
      <StatusMessage statusNum={statusNum} />
    </div>
  );
}

export default PersonnelUpdate;
