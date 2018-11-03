import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import withWidth from '@material-ui/core/withWidth';

class Post extends Component {
  render() {
    const { width } = this.props;
    const styles = StyleSheet.create({
      container: {
        width: width === 'xs' ? 300 : 500,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        marginTop: width === 'xs' ? 20 : null,
        marginBottom: 10,
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

export default withWidth()(Post);
