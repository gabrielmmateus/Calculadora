import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../components/Menu";
import Temperature from "../components/Temperature";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Temperature" component={Temperature} />
        <Stack.Screen name="Medida" component={Medida} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Navigation;
