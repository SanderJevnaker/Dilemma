import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, route, TouchableOpacity } from "react-native";
import { _inputs } from "./PlayerScreen";




const GameScreen = (props) => {
    const playerArray = props.route.params.paramKey;

    const shuffleArray = () => {
        playerArray.sort((a,b) => 0.5 - Math.random());
        console.log(playerArray);

    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    Values from PlayerScreen{" "}
                    {playerArray.map((player) => (
                        <Text style={styles.textInputStyle}>{player.value}</Text>
                    ))}
                </Text>
            </View>
            <TouchableOpacity onPress={shuffleArray} style={styles.addBtn}>
                <Text style={{ color: "blue", fontSize: 20 }}>Shuffle</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: "center",
        marginVertical: 10,
    },
    textStyle: {
        textAlign: "center",
        fontSize: 16,
        marginVertical: 10,
    },
    textInputStyle: {
        width: "100%",
    },
    addBtn: {
        backgroundColor: "#0782F9",
        width: "100%",
        padding: 30,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
});
