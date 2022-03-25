import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './Header';

export default function Home() {
  const [contador, setContador] = useState(0);

  function incrementar(){
    setContador(contador + 1);
  }

  return (
    <>
      <Header title="Inicio"/>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, World!</Text>
        <TouchableOpacity style={styles.button} onPress={incrementar}>
          <Text>Clique aqui</Text>
        </TouchableOpacity>
        <Text style={styles.cont}>{contador} toques!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1c1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  cont: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold'
  }
});
