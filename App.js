import React, {useState} from "react";
import {Alert, Button, StyleSheet, Text, View, Switch, TextInput, ScrollView, Image} from 'react-native';
import {FirstOne} from "./components/FIrstOne";
import {MyFlatList} from "./components/MyFlatList";
import {MySectionList} from "./components/MySectionList";

//import the Login component
import Login from "./components/Login";



// 'App' is parent component, 'ThisIsMyName' and 'NameInput' is child components
const App = () => {
    const [user, setUser] = useState(null);

    if(!user){
        return (
            <View style={styles.container}>
                <Login setUser={setUser}/>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <Text>Hello There!</Text>
                <MySectionList/>
            </View>
        );
    }
  };


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ff',
    paddingTop: 40,
  },
});
