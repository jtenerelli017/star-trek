function StatusMessage(props) {
  const num = props.statusNum;
  return num === 0 ? (
    <></>
  ) : num === 1 ? (
    <div>
      <p className="status" style={{ color: "lightgreen" }}>
        Success!
      </p>
    </div>
  ) : num === 2 ? (
    <div>
      <p className="status" style={{ color: "lightpink" }}>
        ERROR: Attempt to connect to server failed. Check your connection and
        try again.
      </p>
    </div>
  ) : num === 3 ? (
    <div>
      <p className="status" style={{ color: "lightcoral" }}>
        ERROR: Invalid argument(s). Read the instructions above and try again.
      </p>
    </div>
  ) : num === 4 ? (
    <div>
      <p className="status" style={{ color: "lightcyan" }}>
        No personnel entry exists in the database.
      </p>
    </div>
  ) : num === 5 ? (
    <div>
      <p className="status" style={{ color: "coral" }}>
        ERROR: Personnel entry no longer exists in the database.
      </p>
    </div>
  ) : num === 6 ? (
    <div>
      <p className="status" style={{ color: "white" }}>
        Loading...
      </p>
    </div>
  ) : num === 7 ? (
    <div>
      <p className="status" style={{ color: "orangered" }}>
        ERROR: Data with supplied argument does not exist.
      </p>
    </div>
  ) : (
    <div>
      <p className="status" style={{ color: "red" }}>
        ERROR: An unknown error has occurred.
      </p>
    </div>
  );
}

export default StatusMessage;
