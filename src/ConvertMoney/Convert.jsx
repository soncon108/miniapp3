import { useState } from "react";

import "./Convert.css";

function Convert() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("VND");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const convertCurrency = () => {
    event.preventDefault();

    let newResult = 0;
    if (fromCurrency === "USD" && toCurrency === "VND") {
      newResult = amount * 23000;
    } else if (fromCurrency === "VND" && toCurrency === "USD") {
      newResult = amount / 23000;
    } else if (fromCurrency === "USD" && toCurrency === "EUR") {
      newResult = amount * 0.85;
    } else if (fromCurrency === "EUR" && toCurrency === "USD") {
      newResult = amount / 0.85;
    } else if (fromCurrency === "VND" && toCurrency === "EUR") {
      newResult = amount * 0.000037;
    } else if (fromCurrency === "EUR" && toCurrency === "VND") {
      newResult = amount / 0.000037;
    }
    setResult(newResult);
  };

  return (
    <>
      <div className="containerConvert">
        <h3>Convert To Money</h3>
        <form onSubmit={convertCurrency}>
          <div className="rowConvert">
            <label className="rowLabel">From: </label>
            <select value={fromCurrency} onChange={(event) => setFromCurrency(event.target.value)}>
              <option value="USD">USD</option>
              <option value="VND">VND</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="rowConvert">
            <label className="rowLabel">To: </label>
            <select value={toCurrency} onChange={(event) => setToCurrency(event.target.value)}>
              <option value="VND">VND</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="rowConvert">
            <label className="rowLabel">Amount: </label>
            <input className="inputConvert" type="number" value={amount} onChange={(event) => setAmount(event.target.value)}></input>
          </div>
          <div>
            <button type="submit">Convert</button>
          </div>
        </form>
        <div>
          <h4>Result:</h4>
          <p>{result.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default Convert;
