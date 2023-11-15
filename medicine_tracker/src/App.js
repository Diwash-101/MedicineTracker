import "./App.css";

import { useState, useEffect } from "react";
import { useMotionValue, Reorder } from "framer-motion";

function App() {
  const [isChecked, setisChecked] = useState(-1);
  const [medicines, setmedicines] = useState([
    { itemName: "Ceham", itemLeft: 7, key: "Ceham 500" },
    {
      itemName: "AnotherMedicine",
      itemLeft: 5,
      key: "AnotherMedicine 500",
    },
    { itemName: "Ceham", itemLeft: 7, key: "Ceham 501" },
    { itemName: "Ceham", itemLeft: 7, key: "Ceham 502" },
    { itemName: "Ceham", itemLeft: 7, key: "Ceham 503" },
    { itemName: "Ceham", itemLeft: 7, key: "Ceham 504" },
  ]);

  const radioHandler = (status) => {
    setisChecked(status);
  };
  const motionValue = useMotionValue(1);

  const MedicineList = medicines.map((medicine, i) => (
    <Reorder.Item value={medicine} id={medicine} style={motionValue}>
      <input type="radio" name="medicine" checked={isChecked === i} />
      <label htmlFor={medicine.key}>
        <div className="tile" onClick={() => radioHandler(i)}>
          <div className="title-2">{medicine.itemName}</div>
          <div className="title-3">{medicine.itemLeft} pills left</div>
          <br />
          {isChecked === i && menu(medicine)}
        </div>
      </label>
    </Reorder.Item>
  ));
  return (
    <div className="App">
      <div className="topbar">
        <div className="title">MedicineTracker</div>
      </div>
      <Reorder.Group
        axis="y"
        values={medicines}
        layoutScroll
        onReorder={setmedicines}
      >
        {MedicineList}
      </Reorder.Group>

      <button className="floatingActionButton"></button>
    </div>
  );
}

function menu(medicine) {
  return (
    <div className="disc">
      {medicine.key}
      <br />
      <br />
      Inventory / add new package <br /> <br />
      Intake Time <br />
      <br />
      Intake Frequency <br /> <br /> <br />
    </div>
  );
}

export default App;
