import { StatusBar } from 'expo-status-bar';
import React, { useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetStories from '../utils/GetStories'
import Map from '../components/Map'
import TabNavigator from './TabNavigator'
import { NavigationContainer } from "@react-navigation/native";
import GetUserPosition from '../utils/GetUserPosition'
//TODO: tekstinä postaaminen, paikannus


export default function MainView() {

    useEffect(() => {
    GetStories()
    GetUserPosition()
    }, [])
    
    return (
            <NavigationContainer style={styles.container}>
                <TabNavigator></TabNavigator>
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});