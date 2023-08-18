import "./style.css";
import "./table.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DataSelect from "./components/DataSelect";
import React from "react";
import star_trek_jpg from "./star-trek.jpg"

function App() {
  return (
    <div>
      <img src={star_trek_jpg} alt="Star Trek background" id="star-trek-jpg" />
      <div id="app-container">
        <p id="title"><i><b>Star Trek Database</b></i></p>
        <DataSelect />
      </div>
    </div>
  );
}

export default App;
