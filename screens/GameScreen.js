import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button, route } from 'react-native'

const GameScreen = ({ route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          React Native Pass Value From One Screen to Another Using React
          Navigation
        </Text>
        <Text style={styles.textStyle}>
          Values passed from First page: {route.params.inputs}
        </Text>
      </View>
      <Text style={{ textAlign: 'center', color: 'grey' }}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
});
