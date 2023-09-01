function Padding(props) {
  const len = props.len;
  if (len < 8) {
    let rows = [];
    for (let i = 0; i < 8 - len; i++) {
      rows.push(
        <tr key={i}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }
    return rows;
  }
}

export default Padding;
