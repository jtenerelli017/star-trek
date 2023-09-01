import { useState } from "react";
import RosterCreate from "./RosterCreate";
import RosterDestroy from "./RosterDestroy";
import RosterUpdate from "./RosterUpdate";

function Roster() {
  const [crud, setCrud] = useState(0);

  return (
    <div className="align">
      <div id="crud-buttons-container">
        <button type="radio" onClick={() => setCrud(0)}>
          Create
        </button>
        <button type="radio" onClick={() => setCrud(1)}>
          Update
        </button>
        <button type="radio" onClick={() => setCrud(2)}>
          Destroy
        </button>
      </div>
      {crud === 0 ? (
        <div>
          <p className="header">
            <b>Create Roster Entry</b>
          </p>
          <RosterCreate />
        </div>
      ) : crud === 1 ? (
        <div>
          <p className="header">
            <b>Update Roster Entry</b>
          </p>
          <RosterUpdate />
        </div>
      ) : (
        <div>
          <p className="header">
            <b>Destroy Roster Entry</b>
          </p>
          <RosterDestroy />
        </div>
      )}
    </div>
  );
}

export default Roster;
