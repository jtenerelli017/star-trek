import "../App.css";

function ListPersonnel(personnelList) {
  const l = personnelList.personnelList;
  return (
    <div id="personnel-list">
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Species</th>
            <th>Affiliation</th>
          </tr>
          {l.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{val.gender}</td>
                <td>{val.species}</td>
                <td>{val.affiliation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListPersonnel;