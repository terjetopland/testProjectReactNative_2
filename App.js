import React, {Component} from "react";
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

class MyState extends Component {
  state = {
    goodnight: 'Torjus, good night!!'
  }

updateState = () => this.setState({goodnight: 'is it working'})
  render() {
    return (
        <View style={styles.container}>
          <Button
              title={this.state.goodnight}
              onPress={this.updateState}
          />
        </View>
    );
  }
}

export default MyState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
