import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    const input = result;
    const operands = input.split(/[+\-*/]/);
    const operators = input.replace(/[0-9]|\./g, "").split("");
    let tempResult = Number(operands[0]);

    for (let i = 0; i < operators.length; i++) {
      const currentOperator = operators[i];
      const currentOperand = Number(operands[i + 1]);
      switch (currentOperator) {
        case "+":
          tempResult += currentOperand;
          break;
        case "-":
          tempResult -= currentOperand;
          break;
        case "*":
          tempResult *= currentOperand;
          break;
        case "/":
          tempResult /= currentOperand;
          break;
        default:
          break;
      }
    }
    setResult(tempResult.toString());
  };
  return (
    <>
      <h1 className="titleCal">Calculator</h1>
      <div className="containerCal">
        <form>
          <input type="text" value={result} onChange={handleClick} />
        </form>

        <div className="keypad">
          <button className="butCal" onClick={clear} id="clear">
            Clear
          </button>
          <button className="butCal" onClick={backspace} id="backspace">
            C
          </button>
          <button className="butCal" name="/" id="highlight" onClick={handleClick}>
            &divide;
          </button>
          <button className="butCal" name="7" onClick={handleClick}>
            7
          </button>
          <button className="butCal" name="8" onClick={handleClick}>
            8
          </button>
          <button className="butCal" name="9" onClick={handleClick}>
            9
          </button>
          <button className="butCal" name="*" id="highlight" onClick={handleClick}>
            {" "}
            &times;
          </button>
          <button className="butCal" name="4" onClick={handleClick}>
            4
          </button>
          <button className="butCal" name="5" onClick={handleClick}>
            5
          </button>
          <button className="butCal" name="6" onClick={handleClick}>
            6
          </button>
          <button className="butCal" name="-" id="highlight" onClick={handleClick}>
            &ndash;
          </button>
          <button className="butCal" name="1" onClick={handleClick}>
            1
          </button>
          <button className="butCal" name="2" onClick={handleClick}>
            2
          </button>
          <button className="butCal" name="3" onClick={handleClick}>
            3
          </button>
          <button className="butCal" name="+" id="highlight" onClick={handleClick}>
            +
          </button>
          <button className="butCal" name="0" onClick={handleClick}>
            0
          </button>
          <button className="butCal" name="." onClick={handleClick}>
            .
          </button>
          <button className="butCal" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
