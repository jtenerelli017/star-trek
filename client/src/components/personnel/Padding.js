function Padding(props) {
  const len = props.len;
  const cols = props.cols;

  const generateCols = (cols) => {
    let newCols = []
    for (let i = 0; i < cols; i++) {
      newCols.push(<td key={i}></td>);
    }
    return newCols;
  }
  if (len < 8) {
    let rows = [];
    for (let i = 0; i < 8 - len; i++) {
      rows.push(
        <tr key={i}>
          {generateCols(cols)}
        </tr>
      );
    }
    return rows;
  }
}

export default Padding;
