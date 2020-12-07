import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import Map from '../components/Map'
import List from '../components/List'
import { StatusBar } from 'expo-status-bar';


const Tab = createMaterialTopTabNavigator();

// 

export default function TabNavigator() {
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="List" component={List} />
      </Tab.Navigator>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});