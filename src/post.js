import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Post extends Component {
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
        <Text>Post</Text>
      </View>
    );
  }
}

export default Post;
