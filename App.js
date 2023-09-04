import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <View style={styles.app}>
      {/* Adiciona a StatusBar */}
      <StatusBar backgroundColor="#222" barStyle="light-content" />

      <View style={styles.calculatorContainer}>
        <Calculator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#fff",
  },
  calculatorContainer: {
    flex: 1,
  },
});

export default App;
