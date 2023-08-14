import { useState } from "react";
import Personnel from "./personnel/Personnel";
import RosterCreate from "./roster/RosterCreate";
import StarshipCreate from "./starship/StarshipCreate";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function DataSelect() {
  const [table, setTable] = useState(0);

  if (table === 0) {
    return (
      <div className="align">
        <div id="table-select-radio-container">
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton id="tbg-radio-1" value={1} onClick={() => setTable(0)}>
              Personnel
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2} onClick={() => setTable(1)}>
              Starship
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3} onClick={() => setTable(2)}>
              Roster
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Personnel />
      </div>
    );
  } else if (table === 1) {
    return (
      <div className="align">
        <div id="table-select-radio-container">
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton id="tbg-radio-1" value={1} onClick={() => setTable(0)}>
              Personnel
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2} onClick={() => setTable(1)}>
              Starship
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3} onClick={() => setTable(2)}>
              Roster
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <StarshipCreate />
      </div>
    );
  } else {
    return (
      <div className="align">
        <div id="table-select-radio-container">
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton id="tbg-radio-1" value={1} onClick={() => setTable(0)}>
              Personnel
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2} onClick={() => setTable(1)}>
              Starship
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3} onClick={() => setTable(2)}>
              Roster
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <RosterCreate />
      </div>
    );
  }
}

export default DataSelect;
