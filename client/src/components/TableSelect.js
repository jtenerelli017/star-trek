import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function TableSelect() {
  return (
    <div className="crud">
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Personnel
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Starship
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Roster
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default TableSelect;