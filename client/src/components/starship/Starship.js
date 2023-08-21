import { useState } from "react";
import StarshipCreate from "./StarshipCreate";
import StarshipDestroy from "./StarshipDestroy";
import StarshipUpdate from "./StarshipUpdate";

function Starship() {
  const [crud, setCrud] = useState(0);

  return (
    <div className="align">
      <div id="crud-buttons-container">
        <button type="radio" onClick={() => setCrud(0)}>Create</button>
        <button type="radio" onClick={() => setCrud(1)}>Update</button>
        <button type="radio" onClick={() => setCrud(2)}>Destroy</button>
      </div>
      {crud === 0 ? <div><p className="header"><b>Create Starship Entry</b></p><StarshipCreate /></div>
        : crud === 1 ? <div><p className="header"><b>Update Starship Entry</b></p><StarshipUpdate /></div>
        : <div><p className="header"><b>Destroy Starship Entry</b></p><StarshipDestroy /></div>
      }
    </div>
  );
}

export default Starship;