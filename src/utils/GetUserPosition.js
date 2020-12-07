import storeLocation from '../redux/redux-functions'
import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react';

export default async function GetUserPosition() {
    let { status } = await Location.requestPermissionsAsync().catch(err => {
        console.log(err)
    })
    if (status !== 'granted') {
        Alert.alert('Location is necessary for posting')
    }
    else {
        storeLocation(await Location.getCurrentPositionAsync({})).catch(err => {
            console.log(err)
        })
    }

}