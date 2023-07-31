import React from "react";
import Personnel from "./Personnel";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function TableSelect() {
  const [table, setTable] = useState(0);
  console.log(1);

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
    console.log(table);
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
      </div>
    );
  }
}

export default TableSelect;
