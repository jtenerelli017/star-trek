import "../App.css";

function StatusMessage(statusNum) {
  if (statusNum.statusNum === 0)
    return (<div></div>);
  if (statusNum.statusNum === 1)
    return (<div><p className="status s1">Successfully added personnel!</p></div>);
  if (statusNum.statusNum === 2)
    return (<div><p className="status s2">ERROR: Attempt to connect to server failed. Check your connection and try again.</p></div>);
  return (<div><p className="status s3">ERROR: Invalid argument(s). Read the instructions above and try again.</p></div>);
}

export default StatusMessage;
