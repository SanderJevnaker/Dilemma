import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { auth } from '../firebase';





const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  const [text, setText] = useState('');
  return (

    <View style={styles.container}>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Add player"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>

  );
};
export default HomeScreen;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 450,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 25,

  },
  addBtn: {
    width: '70%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 450,
  },
});

