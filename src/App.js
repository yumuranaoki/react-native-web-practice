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
      },
      tabAlign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      link: {
        margin: 50,
        width: 200,
        height: 50,
        borderColor: '#191970',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      linkText: {
        color: 'black',
        fontSize: 28,
        fontWeight: '500',
        fontFamily: 'Roboto Mono',
      },
      japanese: {
        fontFamily: 'Noto Sans JP',
      },
      english: {
        fontFamily: 'Roboto Mono',
      },
      headerText: {
        fontSize: 36,
        fontWeight: '700'
      },
      linkTag: {
        textDecorationLine: 'none',
      },
      contents: {
        width: 500,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
      }
    });
    return (
      <Router>
        <View
          style={styles.container}
        >
          <Text
            style={[styles.english, styles.headerText]}
          >
            Naoki Yumura
          </Text>
          <View
            style={styles.tabAlign}
          >
            <View
              style={styles.link}
            >
              <Link
                to='profile'
                style={{ textDecorationLine: 'none' }}
              >
                <Text
                  style={[styles.linkText, styles.english]}
                >
                  Profile
                </Text>
              </Link>
            </View>
            <View
              style={styles.link}
            >
              <Link
                to='post'
                style={{ textDecorationLine: 'none' }}
              >
                <Text
                  style={[styles.linkText, styles.english]}
                >
                  Post
                </Text>
              </Link>
            </View>
          </View>
          <View
            style={styles.contents}
          >
            <Route path='/profile' component={Profile} />
            <Route path='/post' component={Post} />
          </View>          
        </View>
      </Router>
    );
  }
}

export default App;
