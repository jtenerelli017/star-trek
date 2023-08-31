function PersonnelReadLogs(props) {
    const logs = props.personnelLogs;
    const isCaptain = props.isCaptain;
    
    return !isCaptain ? <></>
      : <div className="personnel-read-table">
          <table className="table">
            <caption className="table-caption">Captain's Logs: {props.name}</caption>
            <tbody>
              <tr>
                <th>Captain ID</th>
                <th>Star Date</th>
                <th>Message</th>
              </tr>
              {logs.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.captain_id}</td>
                    <td>{val.star_date}</td>
                    <td>{val.message}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
  }
  
  export default PersonnelReadLogs;