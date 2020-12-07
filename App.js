import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainView from './src/containers/MainView'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
  return (

    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.bar}>
          <StatusBar backgroundColor='white' />
        </View>
        <MainView />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    height: "5%"
  },
});