import React from "react";
import {Alert, Button, StyleSheet, Text, View, Switch, TextInput, ScrollView} from 'react-native';
import {ThisIsMyName} from "./Name";
import {NameInput} from "./Name";

function SomeText() {
  return (
      <Text>
        Working fine, doesn't it?
      </Text>
  )
}


const App = () => {
    return (
          <View style={styles.container}>
            <Text>Hello there</Text>
            <Button title={'hello there'}/>
            <ThisIsMyName/>
            <NameInput/>
          </View>
    );

  };


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
