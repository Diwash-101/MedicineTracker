import "./App.css";
import Medicines from "./Medicines";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div className="topbar">
        <div className="title">MedicineTracker</div>
      </div>
      <Medicines />

      <button className="floatingActionButton"></button>
    </div>
  );
}

export default App;
