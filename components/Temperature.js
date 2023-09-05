import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const Temperature = () => {
  const [temperatura, setTemperatura] = useState('');
  const [unidadeDeEntrada, setUnidadeDeEntrada] = useState('celsius');
  const [unidadeDeSaida, setUnidadeDeSaida] = useState('celsius');
  const [resultado, setResultado] = useState('');

  const converterTemperatura = () => {
    if (unidadeDeEntrada === 'celsius' && unidadeDeSaida === 'fahrenheit') {
      const resultado = (parseFloat(temperatura) * 9 / 5) + 32;
      setResultado(`${resultado.toFixed(2)} °F`);
    } else if (unidadeDeEntrada === 'celsius' && unidadeDeSaida === 'kelvin') {
      const resultado = parseFloat(temperatura) + 273.15;
      setResultado(`${resultado.toFixed(2)} K`);
    } else if (unidadeDeEntrada === 'fahrenheit' && unidadeDeSaida === 'celsius') {
      const resultado = (parseFloat(temperatura) - 32) * 5 / 9;
      setResultado(`${resultado.toFixed(2)} °C`);
    } else if (unidadeDeEntrada === 'fahrenheit' && unidadeDeSaida === 'kelvin') {
      const resultado = (parseFloat(temperatura) - 32) * 5 / 9 + 273.15;
      setResultado(`${resultado.toFixed(2)} K`);
    } else if (unidadeDeEntrada === 'kelvin' && unidadeDeSaida === 'celsius') {
      const resultado = parseFloat(temperatura) - 273.15;
      setResultado(`${resultado.toFixed(2)} °C`);
    } else if (unidadeDeEntrada === 'kelvin' && unidadeDeSaida === 'fahrenheit') {
      const resultado = (parseFloat(temperatura) - 273.15) * 9 / 5 + 32;
      setResultado(`${resultado.toFixed(2)} °F`);
    } else {
      setResultado(temperatura);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Temperatura</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a temperatura"
        keyboardType="numeric"
        value={temperatura}
        onChangeText={(valor) => setTemperatura(valor)}
      />
      <Picker
        selectedValue={unidadeDeEntrada}
        style={styles.select}
        onValueChange={(itemValue) => setUnidadeDeEntrada(itemValue)}
      >
        <Picker.Item label="Celsius" value="celsius" />
        <Picker.Item label="Fahrenheit" value="fahrenheit" />
        <Picker.Item label="Kelvin" value="kelvin" />
      </Picker>
      <Picker
        selectedValue={unidadeDeSaida}
        style={styles.select}
        onValueChange={(itemValue) => setUnidadeDeSaida(itemValue)}
      >
        <Picker.Item label="Celsius" value="celsius" />
        <Picker.Item label="Fahrenheit" value="fahrenheit" />
        <Picker.Item label="Kelvin" value="kelvin" />
      </Picker>
      <TouchableOpacity style={styles.botao} onPress={converterTemperatura}>
        <Text style={styles.textoBotao}>Converter</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  select: {
    width: '80%',
    height: 40,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#009dff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default Temperature;
