import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Profile extends Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex:1,
        alignItems: 'stretch',
      },
      english: {
        fontFamily: 'Roboto Mono',
      },
      header1: {

      },
      header2: {
        fontSize: 18,
        fontWeight: '500',
      },
      description: {
        marginBottom: 10,
        marginLeft: 5,
      },
    });

    return(
      <View
        style={styles.container}
      >
        <Text style={[styles.english, styles.header2]}>Name</Text>
        <Text style={[styles.english, styles.description]}>Naoki Yumura</Text>
        <Text style={[styles.english, styles.header2]}>Birthday</Text>
        <Text style={[styles.english, styles.description]}>1995/01</Text>
        <Text style={[styles.english, styles.header2]}>Programming Language</Text>
        <Text style={[styles.english, styles.description]}>javascript, ruby, go</Text>
        <Text style={[styles.english, styles.header2]}>Framework</Text>
        <Text style={[styles.english, styles.description]}>react, react native, ruby on rails</Text>
      </View>
    );
  }
}

export default Profile;
