import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Profile from './profile';
import Post from './post';

class App extends Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabAlign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      link: {
        margin: 50,
        width: 200,
        height: 50,
        backgroundColor: '#191970',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      linkText: {
        color: 'white',
        fontSize: 28,
        fontWeight: '500',
      }
    });
    return (
      <Router>
        <View
          style={styles.container}
        >
          <Text>
            react native web
          </Text>
          <View
            style={styles.tabAlign}
          >
            <View
              style={styles.link}
            >
              <Link to='profile'>
                <Text
                  style={styles.linkText}
                >
                  Profile
                </Text>
              </Link>
            </View>
            <View
              style={styles.link}
            >
              <Link to='post'>
                <Text
                  style={styles.linkText}
                >
                  Post
                </Text>
              </Link>
            </View>
          </View>          
          <Route path='/profile' component={Profile} />
          <Route path='/post' component={Post} />
        </View>
      </Router>
    );
  }
}

export default App;
