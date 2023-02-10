import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
const Name = () => {
    const name = 'Terje'
    return (
        <Text>My name is {name}</Text>
    )
};

const NameInput = () => {
    return (
        <View>
            <Text style={{marginTop: 10}}>Please enter your name</Text>
            <TextInput style={inputStyles.container}
            />
        </View>
    )
}

const inputStyles = StyleSheet.create({
    container: {
        fontSize: 12,
        marginHorizontal: 0,
        marginVertical:3,
        backgroundColor: '#9df'
    }
})

export { Name as ThisIsMyName};
export {NameInput as NameInput};