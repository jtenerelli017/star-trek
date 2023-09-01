import { useState } from "react";
import Axios from "axios";
import PersonnelReadBios from "./PersonnelReadBios";
import PersonnelReadHist from "./PersonnelReadHist";
import PersonnelReadLogs from "./PersonnelReadLogs";
import PersonnelReadShip from "./PersonnelReadShip";
import StatusMessage from "../StatusMessage";

function PersonnelRead() {
  const [bios, setBios] = useState(null);
  const [hist, setHist] = useState(null);
  const [logs, setLogs] = useState(null);
  const [ship, setShip] = useState(null);
  const [name, setName] = useState(null);
  const [isCaptain, setIsCaptain] = useState(false);
  const [statusNum, setStatusNum] = useState(0);
  // 0 = nothing
  // 1 = success
  // 2 = network error
  // 3 = invalid argument
  // 4 = no personnel entry exists
  // 5 = chosen personnel entry no longer exists
  // 6 = loading
  // anything else: unknown error

  const getFirstId = () => {
    setStatusNum(6);
    Axios.get("/readFirstId")
      .then((res) => {
        if (res.data.length !== 0) {
          getName(res.data[0]["id"]);
        } else {
          setStatusNum(4);
        }
      })
      .catch((err) => {
        console.log(err);
        setStatusNum(2);
      });
  };

  const getNewId = (id) => {
    setStatusNum(6);
    Axios.get("/readNewId", {
      params: {
        id: id,
      },
    })
      .then((res) => {
        if (res.data.length !== 0) {
          getName(res.data[0]["id"]);
        } else {
          setStatusNum(5);
        }
      })
      .catch((err) => {
        console.log(err);
        setStatusNum(2);
      });
  };

  const getName = (id) => {
    Axios.get("/readPersonnelBiosName", {
      params: {
        id: id,
      },
    })
      .then((res) => {
        if (res.data.length !== 0) {
          getCapStatus(
            id,
            res.data[0].first_name + " " + res.data[0].last_name
          );
        } else {
          setStatusNum(5);
        }
      })
      .catch((err) => {
        console.log(err);
        setStatusNum(2);
      });
  };

  const getCapStatus = (id, name) => {
    Axios.get("/readPersonnelBiosCap", {
      params: {
        id: id,
      },
    })
      .then((res) => {
        if (res.data.length !== 0) {
          setIsCaptain(true);
        } else {
          setIsCaptain(false);
        }
        getBios(id, name);
      })
      .catch((err) => {
        console.log(err);
        setStatusNum(2);
      });
  };

  const getBios = (id, name) => {
    Axios.get("/readPersonnelBios")
      .then((res) => {
        setBios(res.data);
        getHist(id, name);
      })
      .catch((err) => {
        console.log(err);
        setStatusNum(2);
      });
  };

  const getHist = (id, name) => {
    Axios.get("/readPersonnelHist", {
      params: {
        id: id,
      },
    })
      .then((res) => {
        setHist(res.data);
        getLogs(id, name);
      })
      .catch((err) => {
        console.log(err);
        setStatusNum(2);
      });
  };

  const getLogs = (id, name) => {
    Axios.get("/readPersonnelLogs", {
      params: {
        id: id,
      },
    })
      .then((res) => {
        setLogs(res.data);
        getShip(id, name);
      })
      .catch((err) => {
        console.log(err);
        setStatusNum(2);
      });
  };

  const getShip = (id, name) => {
    Axios.get("/readPersonnelShip", {
      params: {
        id: id,
      },
    })
      .then((res) => {
        setShip(res.data);
        setName(name);
        setStatusNum(1);
      })
      .catch((err) => {
        console.log(err);
        setStatusNum(2);
      });
  };

  return (
    <div id="personnel-container" className="align">
      <p className="instructions">
        Read a list of all personnel here. Click "Generate List" to generate a
        list of personnel found in the database. Other data, including
        biographical data, ship transfer history, captain's logs (if the
        personnel is currently a captain), and a ship's name and its captain's
        name if the personnel is serving on that ship. Upon generation, the
        "other" data corresponds to the first personnel in the list. Click on a
        personnel entry to show "other" data corresponding to that personnel. If
        an error occurs, try re-generating the list with the button below.
      </p>
      <div className="generate">
        <button onClick={getFirstId}>Generate List</button>
      </div>
      <StatusMessage statusNum={statusNum} />
      {statusNum === 1 ? (
        <div>
          <PersonnelReadBios bios={bios} getNewId={getNewId} />
          <PersonnelReadHist name={name} hist={hist} />
          <PersonnelReadLogs name={name} logs={logs} isCaptain={isCaptain} />
          <PersonnelReadShip name={name} ship={ship} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PersonnelRead;
