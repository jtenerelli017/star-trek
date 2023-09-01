import Padding from "./Padding";

function PersonnelReadBios(props) {
  const len = props.bios.length;
  return (
    <div className="personnel-read-table">
      <table className="table">
        <caption className="table-caption">List of Personnel</caption>
        <tbody>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Species</th>
            <th>Affiliation</th>
          </tr>
          {props.bios.map((val, key) => {
            return (
              <tr key={key} onClick={() => props.getNewId(val.id)}>
                <td>{val.id}</td>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{val.gender}</td>
                <td>{val.species}</td>
                <td>{val.affiliation}</td>
              </tr>
            );
          })}
          <Padding len={len} cols={6} />
        </tbody>
      </table>
    </div>
  );
}

export default PersonnelReadBios;
