import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [expression, setExpression] = useState('0'); // Alterado para iniciar com "0"

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Erro');
      }
    } else if (value === 'AC') {
      setExpression('0'); // Alterado para reiniciar com "0"
    } else if (value === 'C') {
      setExpression(expression.slice(0, -1));
    } else {
      if (expression === '0') {
        setExpression(value);
      } else {
        setExpression(expression + value);
      }
    }
  };

  return (
    <View style={styles.calculator}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          {/* Adicione o ícone do menu aqui */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.themeToggle}>
          {/* Adicione o ícone do tema escuro aqui */}
        </TouchableOpacity>
      </View>
      <View style={styles.display}>
        <Text style={styles.displayText}>{expression}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.column}>
          {['AC', 7, 4, 1, 0].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.numericButton, item === 'AC' ? styles.blueButton : null]}
              onPress={() => handleButtonClick(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.column}>
          {['C', 8, 5, 2, ""].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.numericButton, item === 'C' ? styles.blueButton : null]}
              onPress={() => handleButtonClick(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.column}>
          {['X', 9, 6, 3, '.'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.numericButton, item === 'X' ? styles.blueButton : null]}
              onPress={() => handleButtonClick(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.column}>
          <TouchableOpacity
            style={[styles.operatorButton, styles.operatorButtonBottom]}
            onPress={() => handleButtonClick('-')}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.operatorButton, styles.operatorButtonTop]}
            onPress={() => handleButtonClick('+')}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => handleButtonClick('/')}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => handleButtonClick('=')}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  themeToggle: {
    fontSize: 24,
  },
  display: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#009dff',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  displayText: {
    fontSize: 36,
    textAlign: 'right',
  },
  buttons: {
    flexDirection: 'row',
    margin: 10,
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
  },
  numericButton: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4d4d4d',
    borderRadius: 5,
    margin: 5,
  },
  operatorButton: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009dff',
    borderRadius: 5,
    margin: 5,
  },
  operatorButtonTop: {
    flex: 1,
  },
  operatorButtonBottom: {
    flex: 2,
  },
  blueButton: {
    backgroundColor: 'blue', // Define a cor de fundo para azul
  },
  buttonText: {
    fontSize: 24,
    color: '#ffffff',
  },
});

export default Calculator;
