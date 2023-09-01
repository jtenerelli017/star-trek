import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DataSelect from "./components/DataSelect";
import React from "react";
import star_trek_jpg from "./star-trek.jpg"
import vignette_bottom from "./vignette-bottom.png";

function App() {
  return (
    <div>
      <img src={star_trek_jpg} alt="Star Trek background" id="star-trek-jpg"/>
      <img src={vignette_bottom} alt="Vignette bottom" id="vignette"/>
      <div id="app-container">
        <p id="title"><i><b>Star Trek Database</b></i></p>
        <DataSelect />
      </div>
    </div>
  );
}

export default App;
