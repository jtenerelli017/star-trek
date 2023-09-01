import { useState } from "react";
import PersonnelCreate from "./PersonnelCreate";
import PersonnelDestroy from "./PersonnelDestroy";
import PersonnelRead from "./PersonnelRead";
import PersonnelUpdate from "./PersonnelUpdate";

function Personnel() {
  const [crud, setCrud] = useState(0);

  return (
    <div className="align">
      <div id="crud-buttons-container">
        <button type="radio" onClick={() => setCrud(0)}>
          Create
        </button>
        <button type="radio" onClick={() => setCrud(1)}>
          Read
        </button>
        <button type="radio" onClick={() => setCrud(2)}>
          Update
        </button>
        <button type="radio" onClick={() => setCrud(3)}>
          Destroy
        </button>
      </div>
      {crud === 0 ? (
        <div>
          <p className="header">
            <b>Create Personnel Entry</b>
          </p>
          <PersonnelCreate />
        </div>
      ) : crud === 1 ? (
        <div>
          <p className="header">
            <b>Read Personnel Entry</b>
          </p>
          <PersonnelRead />
        </div>
      ) : crud === 2 ? (
        <div>
          <p className="header">
            <b>Update Personnel Entry</b>
          </p>
          <PersonnelUpdate />
        </div>
      ) : (
        <div>
          <p className="header">
            <b>Destroy Personnel Entry</b>
          </p>
          <PersonnelDestroy />
        </div>
      )}
    </div>
  );
}

export default Personnel;
