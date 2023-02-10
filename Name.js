import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
const Name = props => {
    const [likeToBuild, setLikeToBuild] = useState(true);

    return (
        <View>
            <Text>
                My name is {props.name}, and I like building {likeToBuild ? 'stuff' : 'with the keyboard'}
            </Text>
            <Button
                onPress={() => {setLikeToBuild(false)}}
                disabled={!likeToBuild}
                title={likeToBuild ? 'Please push the button!' : 'WOW!!'}
            />
        </View>

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