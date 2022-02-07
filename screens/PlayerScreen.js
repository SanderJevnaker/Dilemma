import React, { useEffect, useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core';

const PlayerScreen = () => {
    const navigation = useNavigation()
    const [inputs, setInputs] = useState([{ key: '', value: '' }]);

    const addHandler = () => {
        const _inputs = [...inputs];
        _inputs.push({ key: '', value: '' });
        setInputs(_inputs);
    }

    const deleteHandler = (key) => {
        const _inputs = inputs.filter((input, index) => index != key);
        setInputs(_inputs);
    }

    const inputHandler = (text, key) => {
        const _inputs = [...inputs];
        _inputs[key].value = text;
        _inputs[key].key = key;
        setInputs(_inputs);
        console.log(_inputs)


    }
    const goToGameScreen = () => {
        navigation.replace("Game")
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollStyle}>
                {inputs.map((input, key) => (
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textInputStyle} placeholder={"Player Name"} value={input.value} onChangeText={(text) => inputHandler(text, key)} />
                        <TouchableOpacity style={styles.delBtn} onPress={() => deleteHandler(key)}>
                            <Text style={{ color: "red", fontSize: 20 }}>X</Text>
                        </TouchableOpacity>

                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity
                onPress={addHandler}
                style={styles.addBtn}
            >
                <Text style={{ color: "white", fontSize: 20 }}>+</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => navigation.navigate('Game')}
                style={styles.goToGame}
            >
                <Text style={styles.buttonText}>Go to Game</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //padding:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 85,
    },
    inputContainer: {
        flexDirection: 'row',
        //display: 'flex',
        justifyContent: 'space-between',
        borderColor: '#777',
        padding: 10,
        margin: 10,

        borderRadius: 10,
        //width: '60%',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    buttonText: {
        fontSize: 50,
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    addBtn: {
        backgroundColor: '#0782F9',
        width: '13%',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 10,
    },
    scrollStyle: {
        width: '100%',
        borderWidth: 0,
    },
    delBtn: {
        color: 'green'
    },
    goToGame: {
        backgroundColor: '#0782F9',
        width: '95%',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
    },
})
export default PlayerScreen;

