import { useState } from "react";
import Personnel from "./personnel/Personnel";
import Roster from "./roster/Roster";
import Starship from "./starship/Starship";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function DataSelect() {
  const [table, setTable] = useState(0);

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
      {table === 0 ? <Personnel /> : table === 1 ? <Starship /> : <Roster />}
    </div>
  );
}

export default DataSelect;
