function PersonnelReadHist(props) {
    const hist = props.personnelHist;
    return (
      <div className="personnel-read-table">
        <table className="table">
          <caption className="table-caption">Ship Roster: {props.name}</caption>
          <tbody>
            <tr>
              <th>Registry</th>
              <th>Personnel ID</th>
              <th>Start Date</th>
              <th>Modified Date</th>
              <th>End Date</th>
              <th>Transfer Reason</th>
            </tr>
            {hist.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.starship_reg}</td>
                  <td>{val.personnel_id}</td>
                  <td>{val.date_start}</td>
                  <td>{val.date_modified}</td>
                  <td>{val.date_end}</td>
                  <td>{val.reason}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default PersonnelReadHist;