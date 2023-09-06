import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "./src/components/Button";
import Row from "./src/components/Row";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./src/navigation/Navigation";
import { Picker } from "@react-native-picker/picker";

export default class Temperature extends Component {
  state = {
    inputValue: "",
    outputValue: "",
    fromUnit: "Celsius",
    toUnit: "Fahrenheit",
    MenuAberto: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ MenuAberto: !prevState.MenuAberto }));
  };

  convertTemperature = () => {
    const { inputValue, fromUnit, toUnit } = this.state;

    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
      const result = (inputValue * 9/5) + 32;
      this.setState({ outputValue: result.toFixed(2) + " °F" });
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
      const result = (inputValue - 32) * 5/9;
      this.setState({ outputValue: result.toFixed(2) + " °C" });
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
      const result = parseFloat(inputValue) + 273.15;
      this.setState({ outputValue: result.toFixed(2) + " K" });
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
      const result = parseFloat(inputValue) - 273.15;
      this.setState({ outputValue: result.toFixed(2) + " °C" });
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
      const result = (inputValue - 32) * 5/9 + 273.15;
      this.setState({ outputValue: result.toFixed(2) + " K" });
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
      const result = (inputValue - 273.15) * 9/5 + 32;
      this.setState({ outputValue: result.toFixed(2) + " °F" });
    } else if (fromUnit === toUnit) {
      // Quando as unidades são iguais, exiba a unidade completa junto com o valor
      const unitSymbol = {
        Celsius: "ºC",
        Fahrenheit: "ºF",
        Kelvin: "K",
      }[toUnit];
      this.setState({ outputValue: inputValue + " " + unitSymbol });
    } else {
      this.setState({ outputValue: "Conversão não suportada" });
    }
  };

  addNumber = (number) => {
    this.setState({ inputValue: this.state.inputValue + number });
  };

  removeLastCharacter = () => {
    this.setState({
      inputValue: this.state.inputValue.slice(0, -1),
      outputValue: ""
    });
  };

  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <Icon
            name="bars"
            size={30}
            color="#4D4D4D"
            style={styles.hamburgerIcon}
            onPress={this.toggleMenu}
          />
          <Text style={styles.value}>{this.state.inputValue}</Text>
          <SafeAreaView>
            {this.state.MenuAberto && this.renderMenu()}

            <ScrollView>
              <Row>
                <View style={styles.pickerContainer}>
                  <Text style={styles.pickerLabel}>De: </Text>
                  <Picker
                    selectedValue={this.state.fromUnit}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(itemValue) =>
                      this.setState({ fromUnit: itemValue })
                    }
                  >
                    <Picker.Item label="Celsius" value="Celsius" />
                    <Picker.Item label="Fahrenheit" value="Fahrenheit" />
                    <Picker.Item label="Kelvin" value="Kelvin" />
                  </Picker>
                </View>
              </Row>

              <Text style={styles.result}>{this.state.outputValue}</Text>

              <Row>
                <View style={styles.pickerContainer}>
                  <Text style={styles.pickerLabel}>Para: </Text>
                  <Picker
                    selectedValue={this.state.toUnit}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(itemValue) =>
                      this.setState({ toUnit: itemValue })
                    }
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
                  onPress={() =>
                    this.setState({ inputValue: "", outputValue: "" })
                  }
                />
                <Button
                  text="←"
                  theme="secondary"
                  onPress={this.removeLastCharacter}
                />
              </Row>

              <Row>
                <Button text="7" onPress={() => this.addNumber("7")} />
                <Button text="8" onPress={() => this.addNumber("8")} />
                <Button text="9" onPress={() => this.addNumber("9")} />
              </Row>

              <Row>
                <Button text="4" onPress={() => this.addNumber("4")} />
                <Button text="5" onPress={() => this.addNumber("5")} />
                <Button text="6" onPress={() => this.addNumber("6")} />
              </Row>

              <Row>
                <Button text="1" onPress={() => this.addNumber("1")} />
                <Button text="2" onPress={() => this.addNumber("2")} />
                <Button text="3" onPress={() => this.addNumber("3")} />
              </Row>

              <Row>
                <Button text="0" onPress={() => this.addNumber("0")} />
                <Button text="." onPress={() => this.addNumber(".")} />
                <Button
                  text="="
                  theme="secondary"
                  onPress={this.convertTemperature}
                />
              </Row>
            </ScrollView>
          </SafeAreaView>
        </View>
      </NavigationContainer>
    );
  }
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
