import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Profile extends Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex:1,
        alignItems: 'stretch',
      }
    });

    return(
      <View
        style={styles.container}
      >
        <Text>Profile</Text>
      </View>
    );
  }
}

export default Profile;
