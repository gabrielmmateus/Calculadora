import React, { useState, useCallback } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import Row from "./src/components/Row";
import calculator, { initialState } from "./src/components/Calculator";
import Icon from "react-native-vector-icons/FontAwesome";
import Menu from "./src/components/Menu";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Temperature from "./src/components/Temperature";
import Medida from "./src/components/Medida";

const Stack = createStackNavigator();

export default function App() {
  const [state, setState] = useState({
    ...initialState,
    MenuAberto: false,
  });

  const HandleTap = useCallback((type, value) => {
    setState((prevState) => calculator(type, value, prevState));
  }, []);

  const toggleMenu = useCallback(() => {
    setState((prevState) => ({ ...prevState, MenuAberto: !prevState.MenuAberto }));
  }, []);

  const renderMenu = useCallback(() => {
    return <Menu isOpen={state.MenuAberto} toggleMenu={toggleMenu} />;
  }, [state.MenuAberto, toggleMenu]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Calculator">
          {() => (
            <View style={styles.container}>
              <Icon
                name="bars"
                size={30}
                color="#4D4D4D"
                style={styles.hamburgerIcon}
                onPress={toggleMenu}
              />
              <SafeAreaView>
                {state.MenuAberto && renderMenu()}

                <Text style={styles.value}>
                  {parseFloat(state.currentValue).toLocaleString()}
                </Text>

                <Row>
                  <Button
                    text="AC"
                    theme="secondary"
                    onPress={() => HandleTap("clear")}
                  />

                  <Button
                    text="+/-"
                    theme="secondary"
                    onPress={() => HandleTap("posneg")}
                  />

                  <Button
                    text="%"
                    theme="secondary"
                    onPress={() => HandleTap("percentage")}
                  />

                  <Button
                    text="/"
                    theme="accent"
                    onPress={() => HandleTap("operator", "/")}
                  />
                </Row>

                <Row>
                  <Button text="7" onPress={() => HandleTap("number", 7)} />
                  <Button text="8" onPress={() => HandleTap("number", 8)} />
                  <Button text="9" onPress={() => HandleTap("number", 9)} />
                  <Button
                    text="X"
                    theme="accent"
                    onPress={() => HandleTap("operator", "*")}
                  />
                </Row>

                <Row>
                  <Button text="4" onPress={() => HandleTap("number", 4)} />
                  <Button text="5" onPress={() => HandleTap("number", 5)} />
                  <Button text="6" onPress={() => HandleTap("number", 6)} />
                  <Button
                    text="-"
                    theme="accent"
                    onPress={() => HandleTap("operator", "-")}
                  />
                </Row>

                <Row>
                  <Button text="1" onPress={() => HandleTap("number", 1)} />
                  <Button text="2" onPress={() => HandleTap("number", 2)} />
                  <Button text="3" onPress={() => HandleTap("number", 3)} />
                  <Button
                    text="+"
                    theme="accent"
                    onPress={() => HandleTap("operator", "+")}
                  />
                </Row>

                <Row>
                  <Button text="0" onPress={() => HandleTap("number", 0)} />
                  <Button text="." onPress={() => HandleTap("number", ".")} />
                  <Button
                    text="="
                    theme="accent"
                    onPress={() => HandleTap("equal", "=")}
                  />
                </Row>
              </SafeAreaView>
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Temperature" component={Temperature} />
        <Stack.Screen name="Medida" component={Medida} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
    top: 0,
    right: 10, 
    zIndex: 1,
  },
});
