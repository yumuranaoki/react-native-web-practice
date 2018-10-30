import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';

class App extends Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }
    });
    return (
      <View
        style={styles.container}
      >
          <Text>
            react native web
          </Text>
          <ActivityIndicator />
      </View>
    );
  }
}

export default App;
