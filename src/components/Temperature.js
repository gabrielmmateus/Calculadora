import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "./Button";
import Row from "./Row";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from '@react-navigation/native';
import { Picker } from "@react-native-picker/picker";

export default function Temperature() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Celsius");
  const [toUnit, setToUnit] = useState("Fahrenheit");
  const [menuAberto, setMenuAberto] = useState(false);



  const convertTemperature = () => {
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
      const result = (inputValue * 9/5) + 32;
      setOutputValue(result.toFixed(2) + " °F");
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
      const result = (inputValue - 32) * 5/9;
      setOutputValue(result.toFixed(2) + " °C");
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
      const result = parseFloat(inputValue) + 273.15;
      setOutputValue(result.toFixed(2) + " K");
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
      const result = parseFloat(inputValue) - 273.15;
      setOutputValue(result.toFixed(2) + " °C");
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
      const result = (inputValue - 32) * 5/9 + 273.15;
      setOutputValue(result.toFixed(2) + " K");
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
      const result = (inputValue - 273.15) * 9/5 + 32;
      setOutputValue(result.toFixed(2) + " °F");
    } else if (fromUnit === toUnit) {
      const unitSymbol = {
        Celsius: "ºC",
        Fahrenheit: "ºF",
        Kelvin: "K",
      }[toUnit];
      setOutputValue(inputValue + " " + unitSymbol);
    } else {
      setOutputValue("Conversão não suportada");
    }
  };

  const addNumber = (number) => {
    setInputValue(inputValue + number);
  };

  const removeLastCharacter = () => {
    setInputValue(inputValue.slice(0, -1));
    setOutputValue("");
  };

  return (
    
      <View style={styles.container}>
        <Text style={styles.value}>{inputValue}</Text>
        <SafeAreaView>
          

          <ScrollView>
            <Row>
              <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>De: </Text>
                <Picker
                  selectedValue={fromUnit}
                  style={{ height: 50, width: 200 }}
                  onValueChange={(itemValue) => setFromUnit(itemValue)}
                >
                  <Picker.Item label="Celsius" value="Celsius" />
                  <Picker.Item label="Fahrenheit" value="Fahrenheit" />
                  <Picker.Item label="Kelvin" value="Kelvin" />
                </Picker>
              </View>
            </Row>

            <Text style={styles.result}>{outputValue}</Text>

            <Row>
              <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>Para: </Text>
                <Picker
                  selectedValue={toUnit}
                  style={{ height: 50, width: 200 }}
                  onValueChange={(itemValue) => setToUnit(itemValue)}
                >
                  <Picker.Item label="Celsius" value="Celsius" />
                  <Picker.Item label="Fahrenheit" value="Fahrenheit" />
                  <Picker.Item label="Kelvin" value="Kelvin" />
                </Picker>
              </View>
            </Row>

            <Row>
              <Button
                text="AC"
                theme="secondary"
                onPress={() => {
                  setInputValue("");
                  setOutputValue("");
                }}
              />
              <Button
                text="←"
                theme="secondary"
                onPress={removeLastCharacter}
              />
            </Row>

            <Row>
              <Button text="7" onPress={() => addNumber("7")} />
              <Button text="8" onPress={() => addNumber("8")} />
              <Button text="9" onPress={() => addNumber("9")} />
            </Row>

            <Row>
              <Button text="4" onPress={() => addNumber("4")} />
              <Button text="5" onPress={() => addNumber("5")} />
              <Button text="6" onPress={() => addNumber("6")} />
            </Row>

            <Row>
              <Button text="1" onPress={() => addNumber("1")} />
              <Button text="2" onPress={() => addNumber("2")} />
              <Button text="3" onPress={() => addNumber("3")} />
            </Row>

            <Row>
              <Button text="0" onPress={() => addNumber("0")} />
              <Button text="." onPress={() => addNumber(".")} />
              <Button
                text="="
                theme="secondary"
                onPress={convertTemperature}
              />
            </Row>
          </ScrollView>
        </SafeAreaView>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    justifyContent: "flex-end",
  },
  value: {
    color: "#009DFF",
    fontSize: 45,
    textAlign: "left",
    marginBottom: 20,
  },
  result: {
    color: "#4D4D4D",
    fontSize: 35,
    textAlign: "left",
    marginBottom: 20,
  },
  hamburgerIcon: {
    position: "absolute",
    top: 50,
    width: 100,
    left: 10,
    zIndex: 1,
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pickerLabel: {
    fontSize: 16,
    marginRight: 10,
  },
});
