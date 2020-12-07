import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IconButton, Colors } from 'react-native-paper';
import { FlatList, StyleSheet, View, Text, Button, Modal, Alert } from 'react-native';
import { hideModal } from '../redux/redux-functions'
import { TextInput } from 'react-native-paper'
import PostStory from '../utils/PostStory'

export default function PostStoryModal() {

    const state = useSelector(state => state)
    const modalVisible = state.modalFormVisible
    const [title, setTitle] = useState('Post this')
    const [description, setDescription] = useState('What fun')
    const [storyText, setStoryText] = useState("Convenient way to test posting.")

    return (
        <View style={styles.modal}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    hideModal()
                }}>

                <IconButton
                    icon="close-circle"
                    color={Colors.orange500}
                    size={30}
                    onPress={() => hideModal()}
                />

                <TextInput
                    label="Title"
                    value={title}
                    onChangeText={text => setTitle(text)}
                    theme={theme}
                />
                <TextInput
                    label="Description of exact spot"
                    value={description}
                    onChangeText={text => setDescription(text)}
                    theme={theme}
                    placeholder="Against the oak tree"
                />

                <TextInput
                    label="Story"
                    value={storyText}
                    onChangeText={text => setStoryText(text)}
                    theme={theme}
                    multiline={true}
                    numberOfLines={8}
                />

                <View style={styles.postbutton}>
                    <IconButton
                        icon="file-send"
                        color={Colors.orange500}
                        size={60}
                        onPress={() => {
                            PostStory(title, description, storyText)
                            //Alert.alert('Story sent')
                            hideModal()
                        }}
                    />
                </View>
            </Modal>
        </View>
    )

}

const styles = StyleSheet.create({
    modal: {
    },
    postbutton: {
        flexDirection: 'row',
        justifyContent: 'center'
    }

});
const theme = {
    colors: {
        primary: 'blue', underlineColor: 'blue'
    }
}