import "../App.css";

function StatusMessage(statusNum) {
  if (statusNum.statusNum === 0)
    return (<div></div>);
  if (statusNum.statusNum === 1)
    return (<div><p className="s1">Success!</p></div>);
  if (statusNum.statusNum === 2)
    return (<div><p className="s2">Network Error!</p></div>);
  return (<div><p className="s3">User Error!</p></div>);
}

export default StatusMessage;
