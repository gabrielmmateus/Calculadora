import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Certifique-se de importar o ícone necessário

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <View style={[styles.menu, isOpen ? styles.menuOpen : null]}>
      <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
        <Icon name="times" size={20} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.menuTitle}>Conversores</Text>
      
      <TouchableOpacity onPress={() => console.log("Conversão de Medida")}>
        <View style={styles.menuItem}>
          <Icon name="thermometer" size={20} color="#fff" />
          <Text style={styles.menuOption}>Temperatura</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.separator}></View>
      
      <TouchableOpacity onPress={() => console.log("Conversão de Medida")}>
        <View style={styles.menuItem}>
          <Icon name="calculator" size={20} color="#fff" />
          <Text style={styles.menuOption}>Calculadora</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.separator}></View>
      
      <TouchableOpacity onPress={() => console.log("Conversão de Medida")}>
        <View style={styles.menuItem}>
          <Icon name="ruler" size={20} color="#fff" />
          <Text style={styles.menuOption}>Medida</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.separator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    width: 200,
    height: "150%",
    backgroundColor: "#009Dff",
    zIndex: 3,
    padding: 20,
    paddingTop: 50,
  },

  menuOpen: {
    transform: [{ translateY: -220 }], // Move o menu de volta para a posição original
  },

  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  menuOption: {
    fontSize: 16,
    marginBottom: 10,
    color: "#fff",
    marginLeft: 10,
  },
  
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 4,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  separator: {
    height: 2,
    backgroundColor: "#fff",
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Menu;
