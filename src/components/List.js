import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, Button, Modal, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import * as Speech from 'expo-speech';
import { IconButton, Colors } from 'react-native-paper';
import PostStoryModal from '../components/PostStoryModal'
import {openModal} from '../redux/redux-functions'

export default function List() {
    var uuid = require("uuid");
    const state = useSelector(state => state)
    const stories = state.stories

    const playText = (text) => {
        Speech.speak(text)
    }
    const showAddModal = () => {
        openModal()
    }
    const makeKey = () => {
        return uuid.v4()
    }

    const renderItem = ({ item }) => {
        if (item !== undefined) {
            return (
                <View>
                    <ListItem key={item.StoryTitle}
                        bottomDivider
                        containerStyle={styles.listItem}>
                        <View style={styles.listItem}>
                            <View>
                                <ListItem.Title>{item.StoryTitle}</ListItem.Title>
                                <ListItem.Subtitle>{item.LocationDescription}</ListItem.Subtitle>
                            </View>
                            <IconButton
                                icon="play-circle"
                                color={Colors.orange500}
                                size={35}
                                onPress={() => playText(item.StoryText)}
                            />
                        </View>
                    </ListItem>
                </View>
            )
        } else {
            return <Text key="emptylist"> No stories </Text>
        }
    }

    return (

        <View style={styles.container}>
            <PostStoryModal/>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={makeKey}
            />
            <IconButton
                icon="map-marker-plus"
                color={Colors.orange500}
                size={50}
                onPress={() => showAddModal()}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    listItem: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    }
});