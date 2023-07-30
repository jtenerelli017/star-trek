import React from "react";
import Personnel from "./components/Personnel";
import "./App.css";
import star_trek_jpg from "./star-trek.jpg"

function App() {
  return (
    <div>
      <img src={star_trek_jpg} alt="Star Trek background" id="star-trek-jpg" />
      <div id="app">
        <p id="title"><i><b>Star Trek Database</b></i></p>
        <Personnel/ >
      </div>
    </div>
  );
}

export default App;
