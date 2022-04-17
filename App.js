import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

import Slider from '@react-native-community/slider';
import * as Clipboard from 'expo-clipboard';

let charset = 'abcdefghijklmnoprqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&_'

export default function App() {
  const [password, setPassword] = useState('');
  const [size, setsize] = useState(14);


  function generatePass() {
    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(pass)

  }


  function copyPass() {
    Clipboard.setString(password);
    Alert.alert('Password Generator', 'Senha copiada com sucesso!', [
      {
        text: 'Ok'
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={8}
          maximumValue={24}
          minimumTrackTintColor='#FF0000'
          maximumTrackT intColor='#000000'
          value={size}
          onValueChange={(valor) => setsize(valor.toFixed(0))} //pega a variavel valor através da func anônima e atualiza seu estado cada vez que ele for alterado{}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass} >
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>



      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}>{password}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3FF'
  },
  logo: {
    marginBottom: 60
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    width: '80%',
    borderRadius: 7
  },
  button: {
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }

});