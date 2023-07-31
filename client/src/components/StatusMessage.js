import "../App.css";

function StatusMessage(statusNum) {
  if (statusNum.statusNum === 0)
    return (<></>);
  if (statusNum.statusNum === 1)
    return (<div><p className="status" id="s1">Successfully added data!</p></div>);
  if (statusNum.statusNum === 2)
    return (<div><p className="status" id="s2">ERROR: Attempt to connect to server failed. Check your connection and try again.</p></div>);
  if (statusNum.statusNum === 3)
    return (<div><p className="status" id="s3">ERROR: Invalid argument(s). Read the instructions above and try again.</p></div>);
  return (<div><p className="status" id="s3">ERROR: Data already exists. Check your arguments and try again.</p></div>);
}

export default StatusMessage;
