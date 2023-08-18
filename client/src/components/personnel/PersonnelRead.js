import { useState } from "react";
import Axios from "axios";
import PersonnelReadBios from "./PersonnelReadBios";
import PersonnelReadHist from "./PersonnelReadHist";
import PersonnelReadLogs from "./PersonnelReadLogs";
import PersonnelReadShip from "./PersonnelReadShip";
import StatusMessage from "../StatusMessage";

function PersonnelRead() {
  const [personnelBios, setPersonnelBios] = useState(null);
  const [statusNum, setStatusNum] = useState(0);
  // 0 = nothing
  // 1 = success
  // 2 = network error
  // 3 = user error
  // 4 = data exists

  const getPersonnel = () => {
    Axios.get("/readPersonnel")
      .then((res) => {
        setPersonnelBios(res.data);
        setStatusNum(1);
      }).catch(err => {
        console.log(err)
        setStatusNum(2);
      });
  };

  if (statusNum !== 1) {
    return (
      <div id="personnel-container" className="align">
        <p className="instructions">
          Read a list of all personnel here.
        </p>
        <div className="generate">
          <button onClick={getPersonnel}>Generate List</button>
        </div>
        <StatusMessage statusNum={statusNum} />
      </div>
    );
  } else {
    return (
      <div id="personnel-container" className="align">
        <p className="instructions">
          Read a list of all personnel here.
        </p>
        <button onClick={getPersonnel}>Generate List</button>
        <PersonnelReadBios personnelBios={personnelBios} />
        <PersonnelReadHist personnelHist={null} />
        <PersonnelReadLogs personnelLogs={null} />
        <PersonnelReadShip personnelShip={null} />
        <StatusMessage statusNum={statusNum} />
      </div>
    );
  };
}

export default PersonnelRead;
