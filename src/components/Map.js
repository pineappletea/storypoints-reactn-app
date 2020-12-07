import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';


export default function Map() {
    const state = useSelector(state => state)
    const stories = state.stories
    const [mapReady, setMapReady] = useState(false)
    let keychain = 0

    const [region, setRegion] = useState({
        latitude: 60.2006,
        longitude: 24.934,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      })

    
    console.log(stories)
    function getKey() {
        keychain++
        return keychain
    }

    function getCoordinates(story) {
        return {
            latitude: story.Coordinates.lat,
            longitude: story.Coordinates.long
        }
    }

    function drawMarkers(stories) {
        if (Array.isArray(stories) && stories.length !== 0 && mapReady) {
            return stories.map(marker => (
                <Marker
                    coordinate={getCoordinates(marker)}
                    title={marker.StoryTitle}
                    description={marker.LocationDescription}
                    key={getKey()}
                />
            ))
        } else {
            return null
        }
    }

    function allowMarkers() {  
        setMapReady(true)
    }


    return (
        <MapView
            style={styles.map}
            region={region}
            onLayout={allowMarkers}
        >
            {drawMarkers(stories)}
        </MapView>
    )

}

const styles = StyleSheet.create({
    map: {
      width: "100%",
      height: "100%"
    }
  });