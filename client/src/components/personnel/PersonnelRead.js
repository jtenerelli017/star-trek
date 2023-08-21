import { useState } from "react";
import Axios from "axios";
import PersonnelReadBios from "./PersonnelReadBios";
import PersonnelReadHist from "./PersonnelReadHist";
import PersonnelReadLogs from "./PersonnelReadLogs";
import PersonnelReadShip from "./PersonnelReadShip";
import StatusMessage from "../StatusMessage";

function PersonnelRead() {
  const [personnelBios, setPersonnelBios] = useState(null);
  const [personnelHist, setPersonnelHist] = useState(null);
  const [personnelLogs, setPersonnelLogs] = useState(null);
  const [personnelShip, setPersonnelShip] = useState(null);
  const [personnelId, setPersonnelId] = useState(null);
  const [statusNum, setStatusNum] = useState(0);
  // 0 = nothing
  // 1 = success
  // 2 = network error
  // 3 = user error
  // 4 = data exists

  const getPersonnel = () => {
    getPersonnelBios()
  }

  const getPersonnelBios = () => {
    Axios.get("/readPersonnelBios")
      .then((res) => {
        setPersonnelBios(res.data);
        setStatusNum(1);
      }).catch(err => {
        console.log(err)
        setStatusNum(2);
      });
  };

  const getPersonnelHist = () => {
    Axios.get("/readPersonnelHist")
      .then((res) => {
        setPersonnelHist(res.data); 
        setStatusNum(1);
      }).catch(err => {
        console.log(err)
        setStatusNum(2);
      });
  };

  const getPersonnelLogs = () => {
    Axios.get("/readPersonnelLogs")
      .then((res) => {
        setPersonnelLogs(res.data);
        setStatusNum(1);
      }).catch(err => {
        console.log(err)
        setStatusNum(2);
      });
  };

  const getPersonnelShip = () => {
    Axios.get("/readPersonnelShip")
      .then((res) => {
        setPersonnelShip(res.data);
        setStatusNum(1);
      }).catch(err => {
        console.log(err)
        setStatusNum(2);
      });
  };

  return (
    <div id="personnel-container" className="align">
      <p className="instructions">
        Read a list of all personnel here.
      </p>
      <div className="generate">
        <button onClick={getPersonnel}>Generate List</button>
      </div>
      {statusNum === 1 ?
        <div>
          <PersonnelReadBios personnelBios={personnelBios} />
          <PersonnelReadHist personnelHist={personnelHist} />
          <PersonnelReadLogs personnelLogs={personnelLogs} />
          <PersonnelReadShip personnelShip={personnelShip} />
        </div>
      : 
        <></>
      }
          <StatusMessage statusNum={statusNum} />
    </div>
  )
};

export default PersonnelRead;
