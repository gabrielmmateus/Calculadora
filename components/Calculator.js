import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleDigitClick = (digit) => {
    if (displayValue === "0" || currentValue === null) {
      setDisplayValue(digit);
      setCurrentValue(parseFloat(digit));
    } else {
      setDisplayValue(displayValue + digit);
      setCurrentValue(parseFloat(displayValue + digit));
    }
  };

  const handleOperatorClick = (op) => {
    if (operator !== null) {
      // Calculate the result if an operator is already selected
      const result = performOperation();
      setCurrentValue(result);
      setDisplayValue(result.toString());
    } else {
      setCurrentValue(parseFloat(displayValue));
    }
    setOperator(op);
    setDisplayValue("0");
  };

  const performOperation = () => {
    const value1 = currentValue;
    const value2 = parseFloat(displayValue);

    switch (operator) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value1 / value2;
      default:
        return value2;
    }
  };

  const handleEqualsClick = () => {
    if (operator !== null) {
      const result = performOperation();
      setCurrentValue(result);
      setOperator(null);
      setDisplayValue(result.toString());
    }
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setCurrentValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleDigitClick("7")}>7</button>
          <button onClick={() => handleDigitClick("8")}>8</button>
          <button onClick={() => handleDigitClick("9")}>9</button>
          <button onClick={() => handleOperatorClick("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleDigitClick("4")}>4</button>
          <button onClick={() => handleDigitClick("5")}>5</button>
          <button onClick={() => handleDigitClick("6")}>6</button>
          <button onClick={() => handleOperatorClick("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleDigitClick("1")}>1</button>
          <button onClick={() => handleDigitClick("2")}>2</button>
          <button onClick={() => handleDigitClick("3")}>3</button>
          <button onClick={() => handleOperatorClick("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleDigitClick("0")}>0</button>
          <button onClick={handleClearClick}>C</button>
          <button onClick={handleEqualsClick}>=</button>
          <button onClick={() => handleOperatorClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
