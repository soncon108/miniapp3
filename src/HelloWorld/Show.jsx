import { useState } from "react";
import "./Show.css";

function Show() {
  const [info, setInfo] = useState("");
  const [checked, setChecked] = useState(false);

  const handleShow = (event) => {
    setInfo(event.target.value);
  };

  const handleCheck = () => {
    setChecked(true);
  };

  const handleUncheck = () => {
    setChecked(false);
  };

  const displayInfo = checked ? info.toUpperCase() : info.toLowerCase();

  return (
    <>
      <div className="containerShow">
        <h3>Nhập Là Hiển Thị</h3>
        <input value={info} onChange={handleShow} />
        <p className="pShow">{displayInfo}</p>
        <button onClick={handleCheck}>Check</button>
        <button onClick={handleUncheck}>Uncheck</button>
      </div>
    </>
  );
}

export default Show;
