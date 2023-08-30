import React, { useState } from "react";
import { View, Text, Button } from "react-native";


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
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}>
        <Text style={{ fontSize: 32, marginBottom: 10 }}>{displayValue}</Text>
      </View>
      <View style={{ flex: 2 }}>
        {[["7", "8", "9", "+"], ["4", "5", "6", "-"], ["1", "2", "3", "*"], ["0", "C", "=", "/"]].map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: "row", justifyContent: "space-between" }}>
            {row.map((buttonText) => (
              <Button
                key={buttonText}
                title={buttonText}
                onPress={() => {
                  if (buttonText === "=") {
                    handleEqualsClick();
                  } else if (buttonText === "C") {
                    handleClearClick();
                  } else {
                    handleDigitClick(buttonText);
                  }
                }}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Calculator;
