import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Button from "./src/components/Button";
import Row from "./src/components/Row";
import calculator, { initialState } from "./src/components/Calculator";
import Icon from "react-native-vector-icons/FontAwesome";
import Menu from "./src/components/Menu"; // Importe o componente Menu
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./src/navigation/Navigation";



export default class App extends Component {
  state = {
    ...initialState,
    MenuAberto: false, // Adicione um estado para controlar a abertura do menu
  };

  // handle tap method
  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  // Método para alternar a abertura/fechamento do menu
  toggleMenu = () => {
    this.setState((prevState) => ({ MenuAberto: !prevState.MenuAberto }));
  };

  // Renderizar o menu vertical
  renderMenu() {
    return (
      <Menu isOpen={this.state.MenuAberto} toggleMenu={this.toggleMenu} />
    );
  }

  // render method
  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <Icon
            name="bars"
            size={30}
            color="#4D4D4D"
            style={styles.hamburgerIcon}
            onPress={this.toggleMenu} // Adicione isso para abrir/fechar o menu ao tocar no ícone
          />
          <SafeAreaView>
            {/* Renderize o menu condicionalmente */}
            {this.state.MenuAberto && this.renderMenu()}

            <Text style={styles.value}>
              {parseFloat(this.state.currentValue).toLocaleString()}
            </Text>

            {/* Do create componentRow */}
            <Row>
              <Button
                text="AC"
                theme="secondary"
                onPress={() => this.HandleTap("clear")}
              />

              <Button
                text="+/-"
                theme="secondary"
                onPress={() => this.HandleTap("posneg")}
              />

              <Button
                text="%"
                theme="secondary"
                onPress={() => this.HandleTap("percentage")}
              />

              <Button
                text="/"
                theme="accent"
                onPress={() => this.HandleTap("operator", "/")}
              />
            </Row>

            {/* Number */}
            <Row>
              <Button text="7" onPress={() => this.HandleTap("number", 7)} />
              <Button text="8" onPress={() => this.HandleTap("number", 8)} />
              <Button text="9" onPress={() => this.HandleTap("number", 9)} />
              <Button
                text="X"
                theme="accent"
                onPress={() => this.HandleTap("operator", "*")}
              />
            </Row>

            <Row>
              <Button text="4" onPress={() => this.HandleTap("number", 4)} />
              <Button text="5" onPress={() => this.HandleTap("number", 5)} />
              <Button text="6" onPress={() => this.HandleTap("number", 6)} />
              <Button
                text="-"
                theme="accent"
                onPress={() => this.HandleTap("operator", "-")}
              />
            </Row>

            <Row>
              <Button text="1" onPress={() => this.HandleTap("number", 1)} />
              <Button text="2" onPress={() => this.HandleTap("number", 2)} />
              <Button text="3" onPress={() => this.HandleTap("number", 3)} />
              <Button
                text="+"
                theme="accent"
                onPress={() => this.HandleTap("operator", "+")}
              />
            </Row>

            <Row>
              <Button text="0" onPress={() => this.HandleTap("number", 0)} />
              <Button text="." onPress={() => this.HandleTap("number", ".")} />
              <Button
                text="="
                theme="accent"
                onPress={() => this.HandleTap("equal", "=")}
              />
            </Row>
          </SafeAreaView>
        </View>
      </NavigationContainer>
    );
  }
}

// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "flex-end",
  },
  value: {
    color: "#009DFF",
    fontSize: 60,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 60,
  },
  hamburgerIcon: {
    position: "absolute",
    top: 50,
    width: 100,
    left: 10,
    zIndex: 1,
  },
});