import React from "react";
import {Alert, Button, StyleSheet, Text, View, Switch, TextInput, ScrollView, Image} from 'react-native';
import {ThisIsMyName} from "./Name";
import {NameInput} from "./Name";


// 'App' is parent component, 'ThisIsMyName' and 'NameInput' is child components
const App = () => {
    return (
          <ScrollView >
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
          </ScrollView>
    );
  };


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
