import { Reorder } from "framer-motion";
import { useState, useEffect } from "react";
import "./App.css";

export default function Medicines() {
  const [isChecked, setisChecked] = useState(-1);
  const [medicines, setmedicines] = useState([
    { itemName: "Ceham1", itemLeft: 7, key: "Ceham 500" },
    {
      itemName: "Ceham2",
      itemLeft: 5,
      key: "AnotherMedicine 500",
    },
    { itemName: "Ceham3", itemLeft: 7, key: "Ceham 501" },
    { itemName: "Ceham4", itemLeft: 7, key: "Ceham 502" },
    { itemName: "Ceham5", itemLeft: 7, key: "Ceham 503" },
    { itemName: "Ceham6", itemLeft: 7, key: "Ceham 504" },
  ]);

  const radioHandler = (status) => {
    if (isChecked == status) {
      setisChecked(-1);
    } else {
      setisChecked(status);
    }
  };

  const menu = (medicine) => {
    <div className="disc">
      {medicine.key}
      <br />
      <br />
      Inventory / add new package <br /> <br />
      Intake Time <br />
      <br />
      Intake Frequency <br /> <br /> <br />
    </div>;
  };

  return (
    <Reorder.Group axis="y" values={medicines} onReorder={setmedicines}>
      {medicines.map((medicine, i) => (
        <Reorder.Item key={medicine.key} value={medicine}>
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
      ))}
    </Reorder.Group>
  );
}
