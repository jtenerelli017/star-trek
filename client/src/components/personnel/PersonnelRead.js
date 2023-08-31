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
  const [name, setName] = useState(null);
  const [statusNum, setStatusNum] = useState(0);
  // 0 = nothing
  // 1 = success
  // 2 = network error
  // 3 = user error
  // 4 = data exists

  const getFirstId = () => {
    Axios.get("/readPersonnelBiosId")
      .then((res) => {
        getName(res.data[0]["id"])
      }).catch(err => {
        console.log(err)
        setStatusNum(2);
      });
  }

  const getNewId = (id) => {
    getName(id);
  }

  const getName = (id) => {
    Axios.get("/readPersonnelBiosName", {
      params: {
        id: id
      }
    })
      .then((res) => {
        getPersonnelBios(id, res.data[0].first_name + " " + res.data[0].last_name);
      }).catch(err => {
        console.log(err)
        setStatusNum(2);
      });
  }
  
  const getPersonnelBios = (id, name) => {
    Axios.get("/readPersonnelBios")
      .then((res) => {
        setPersonnelBios(res.data);
        getPersonnelHist(id, name)
      }).catch(err => {
        console.log(err)
        setStatusNum(2);
      });
  };

  const getPersonnelHist = (id, name) => {
    Axios.get("/readPersonnelHist", {
      params: {
        id: id
      }
    })
      .then((res) => {
        setPersonnelHist(res.data); 
        getPersonnelLogs(id, name)
      }).catch(err => {
        console.log(err)
        setStatusNum(2);
      });
  };

  const getPersonnelLogs = (id, name) => {
    Axios.get("/readPersonnelLogs", {
      params: {
        id: id
      }
    })
      .then((res) => {
        setPersonnelLogs(res.data);
        getPersonnelShip(id, name);
      }).catch(err => {
        console.log(err)
        setStatusNum(2);
      });
  };

  const getPersonnelShip = (id, name) => {
    Axios.get("/readPersonnelShip", {
      params: {
        id: id
      }
    })
      .then((res) => {
        setPersonnelShip(res.data);
        setName(name);
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
        <button onClick={getFirstId}>Generate List</button>
      </div>
      {statusNum === 1 ?
        <div>
          <PersonnelReadBios personnelBios={personnelBios} getNewId={getNewId}/>
          <PersonnelReadHist personnelHist={personnelHist} name={name}/>
          <PersonnelReadLogs personnelLogs={personnelLogs} name={name} />
          <PersonnelReadShip personnelShip={personnelShip} name={name} />
        </div>
      : 
        <></>
      }
          <StatusMessage statusNum={statusNum} />
    </div>
  )
};

export default PersonnelRead;
