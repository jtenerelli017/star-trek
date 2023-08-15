function PersonnelReadBios(personnelBios) {
  const plist = personnelBios.personnelBios;
  return (
    <div className="personnel-read-table">
      <table>
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
          {plist.map((val, key) => {
            return (
              <tr key={key} onClick={() => console.log(val.id)}>
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

export default PersonnelReadBios;