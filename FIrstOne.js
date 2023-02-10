import React from "react";
import { StyleSheet, Text, View, Image} from 'react-native';
import {ThisIsMyName, NameInput} from "./Name";



// 'App' is parent component, 'ThisIsMyName' and 'NameInput' is child components
const FirstOne = () => {
    return (
        <View style={styles.container}>
            <Image
                style={{height: 200, width: 500}}
                source={
                    require('./images/react_native.png')}
            />
            <Text>Hello there</Text>
            <ThisIsMyName name='Terje'/>
            <NameInput/>
        </View>
    );
};


export {FirstOne as FirstOne};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
