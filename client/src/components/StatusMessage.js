function StatusMessage(statusNum) {
  const num = statusNum.statusNum
  return num === 0 ? (<></>)
    : num === 1 ? (<div><p className="status" id="s1">Success!</p></div>)
    : num === 2 ? (<div><p className="status" id="s2">ERROR: Attempt to connect to server failed. Check your connection and try again.</p></div>)
    : num === 3 ? (<div><p className="status" id="s3">ERROR: Invalid argument(s). Read the instructions above and try again.</p></div>)
    : (<div><p className="status" id="s3">ERROR: Data already exists. Check your arguments and try again.</p></div>)
}

export default StatusMessage;
