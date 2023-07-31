import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Crud() {
  return (
    <div className="crud">
      <button type="radio" id="c">Create</button>
      <button type="radio" id="r">Read</button>
    </div>
  );
}

export default Crud;
