import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function Crud() {
  return (
    <div>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton id="tbg-radio-1" value={1}>
            Create
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value={2}>
            Read
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" value={3}>
            Update
          </ToggleButton>
          <ToggleButton id="tbg-radio-4" value={4}>
            Destroy
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
  );
}

export default Crud;
