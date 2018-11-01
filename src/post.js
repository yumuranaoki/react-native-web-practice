import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Post extends Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex:1,
        alignItems: 'stretch',
      },
      english: {
        fontFamily: 'Roboto Mono',
      },
    });

    return(
      <View
        style={styles.container}
      >
        <Text style={styles.english}>No post yet</Text>
      </View>
    );
  }
}

export default Post;
