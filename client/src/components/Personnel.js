import Crud from "./Crud";
import PersonnelCreate from "./PersonnelCreate";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Personnel() {
  return (
    <div className="personnel-container">
      <Crud />
      {/* <PersonnelCreate /> */}
    </div>
  );
}

export default Personnel;
