import React, { Component, } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import withWidth from '@material-ui/core/withWidth';

class Profile extends Component {
  render() {
    console.log(this.props);
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
      header1: {

      },
      header2: {
        fontSize: 18,
        fontWeight: '500',
      },
      description: {
        marginBottom: 10,
        marginLeft: 5,
        fontSize: width === 'xs' ? 12 : null,
      },
    });

    return(
      <View
        style={styles.container}
      >
        <Text style={[styles.english, styles.header2]}>{this.context.state}</Text>
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

export default withWidth()(Profile);
