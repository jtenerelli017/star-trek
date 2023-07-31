import { useState } from "react";
import PersonnelCreate from "./PersonnelCreate";
import PersonnelRead from "./PersonnelRead";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Personnel() {
  const [crud, setCrud] = useState(0);

  if (crud === 0) {
    return (
      <div className="align">
        <div id="crud-buttons-container">
          <button type="radio" id="c" onClick={() => setCrud(0)}>Create</button>
          <button type="radio" id="r" onClick={() => setCrud(1)}>Read</button>
        </div>
        <PersonnelCreate />
      </div>
    );
  } else {
    return (
      <div className="align">
        <div id="crud-buttons-container">
          <button type="radio" id="c" onClick={() => setCrud(0)}>Create</button>
          <button type="radio" id="r" onClick={() => setCrud(1)}>Read</button>
        </div>
        <PersonnelRead />
      </div>
    );
  }
}

export default Personnel;
