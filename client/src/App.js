import React from "react";
import star_trek_jpg from "./star-trek.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TableSelect from "./components/TableSelect";

function App() {
  return (
    <div>
      <img src={star_trek_jpg} alt="Star Trek background" id="star-trek-jpg" />
      <div id="app-container">
        <p id="title"><i><b>Star Trek Database</b></i></p>
        <TableSelect />
      </div>
    </div>
  );
}

export default App;
