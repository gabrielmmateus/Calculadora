import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <View style={styles.app}>
      <Text style={styles.header}>Calculadora Básica</Text>
      <Calculator />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
