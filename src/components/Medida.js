import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Button from "./Button";
import Row from "./Row";
import { Picker } from "@react-native-picker/picker";

export default function Medida() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Metros");
  const [toUnit, setToUnit] = useState("Pés");

  const convertLength = () => {
    if (fromUnit === "Metros" && toUnit === "Pés") {
      const result = inputValue * 3.28084;
      setOutputValue(result.toFixed(2) + " Pés");
    } else if (fromUnit === "Pés" && toUnit === "Metros") {
      const result = inputValue / 3.28084;
      setOutputValue(result.toFixed(2) + " Metros");
    } else if (fromUnit === "Metros" && toUnit === "Polegadas") {
      const result = inputValue * 39.3701;
      setOutputValue(result.toFixed(2) + " Polegadas");
    } else if (fromUnit === "Polegadas" && toUnit === "Metros") {
      const result = inputValue / 39.3701;
      setOutputValue(result.toFixed(2) + " Metros");
    } else if (fromUnit === "Metros" && toUnit === "Jardas") {
      const result = inputValue * 1.09361;
      setOutputValue(result.toFixed(2) + " Jardas");
    } else if (fromUnit === "Jardas" && toUnit === "Metros") {
      const result = inputValue / 1.09361;
      setOutputValue(result.toFixed(2) + " Metros");
    } else if (fromUnit === "Metros" && toUnit === "Centimetros") {
      const result = inputValue * 100;
      setOutputValue(result.toFixed(2) + " Centímetros");
    } else if (fromUnit === "Centimetros" && toUnit === "Metros") {
      const result = inputValue / 100;
      setOutputValue(result.toFixed(2) + " Metros");
    } else if (fromUnit === toUnit) {
      const unitSymbol = {
        Metros: "Metros",
        Pés: "Pés",
        Polegadas: "Polegadas",
        Jardas: "Jardas",
        CentiMetros: "Centímetros",
      }[toUnit];
      setOutputValue(inputValue + " " + unitSymbol);
    } else {
      setOutputValue("Conversão não suportada");
    }
  };

  const addNumber = (number) => {
    setInputValue((prevInputValue) => prevInputValue + number);
  };

  const removeLastCharacter = () => {
    setInputValue((prevInputValue) =>
      prevInputValue.slice(0, -1),
    );
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
                <Picker.Item label="Metros" value="Metros" />
                <Picker.Item label="Pés" value="Pés" />
                <Picker.Item label="Polegadas" value="Polegadas" />
                <Picker.Item label="Jardas" value="Jardas" />
                <Picker.Item label="Centímetros" value="Centimetros" />
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
                <Picker.Item label="Metros" value="Metros" />
                <Picker.Item label="Pés" value="Pés" />
                <Picker.Item label="Polegadas" value="Polegadas" />
                <Picker.Item label="Jardas" value="Jardas" />
                <Picker.Item label="Centímetros" value="Centimetros" />
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
              onPress={convertLength}
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
  
