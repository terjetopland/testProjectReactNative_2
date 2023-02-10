import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
const Name = () => {
    const [likeToBuild, setLikeToBuild] = useState(true);
    const [name, setName] = useState(true);

    return (
        <View>
            <Text>
                My name is: {name ? 'hmmm...lets find out... ' : 'Terje'}, and I like building {likeToBuild ? 'stuff' : 'with the keyboard'}
            </Text>
            <Button
                onPress={() => {setName(false)}}
                disabled={!name}
                title={name ? 'Please push the button to view my name!' : 'WOW you did it!!'}
            />
            <Button
                onPress={() => {setName(true)}}
                disabled={name}
                title={name ? 'Cant press this button yet!' : 'Perfect, now you can!'}
            />
            <Button
                onPress={() => {setLikeToBuild(false)}}
                disabled={!likeToBuild}
                title={likeToBuild ? 'Please push the button!' : 'WOW!!'}
            />
            <Button
                onPress={() => {setLikeToBuild(true)}}
                disabled={likeToBuild}
                title={likeToBuild ? 'Will it work again?' : 'Oh yes!!'}
            />

        </View>

    )
};

const NameInput = () => {
    const [name, setName] = useState('');

    const SubmitPressed= () => {
        return <Text>{name}</Text>
    }

    return (
        <View>
            <TextInput
                style={inputStyles.container}
               placeholder="Type your name here!"
               onChangeText={newText => setName(newText)}
               defaultValue={name}
            />
           <Button
               title={'Submit'}
               onPress={SubmitPressed}
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