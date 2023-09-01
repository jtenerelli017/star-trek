import Padding from "./Padding";

function PersonnelReadLogs(props) {
  const len = props.logs.length;
  return !props.isCaptain ? (
    <></>
  ) : (
    <div className="personnel-read-table">
      <table className="table">
        <caption className="table-caption">
          Captain's Logs: {props.name}
        </caption>
        <tbody>
          <tr>
            <th>Captain ID</th>
            <th>Star Date</th>
            <th>Message</th>
          </tr>
          {props.logs.map((val, key) => {
            return (
              <tr>
                <td>{val.captain_id}</td>
                <td>{val.star_date}</td>
                <td>{val.message}</td>
              </tr>
            );
          })}
          <Padding len={len} />
        </tbody>
      </table>
    </div>
  );
}

export default PersonnelReadLogs;
