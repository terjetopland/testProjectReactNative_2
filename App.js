import React from "react";
import {Alert, Button, StyleSheet, Text, View, Switch, TextInput, ScrollView, Image} from 'react-native';
import {FirstOne} from "./FIrstOne";
import {MyFlatList} from "./MyFlatList";
import {MySectionList} from "./MySectionList";


// 'App' is parent component, 'ThisIsMyName' and 'NameInput' is child components
const App = () => {
    return (
          <View style={styles.container}>
            <FirstOne/>
            <MyFlatList/>
            <MySectionList/>
          </View>
    );
  };


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});
