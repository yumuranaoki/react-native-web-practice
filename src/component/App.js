import React, { Component, createContext } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import Profile from './profile';
import Post from './post';

export const context = createContext();

class App extends Component {
  render() {
    const { width, changeScreen, screen } = this.props;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      },
      tabAlign: {
        flexDirection: width === 'xs' ? 'column' : 'row',
        justifyContent: 'space-between',
      },
      link: {
        margin: width === 'xs' ? 10 : 50,
        width: width === 'xs' ? 300 : 200,
        height: width === 'xs' ? 40 : 50,
        borderColor: '#191970',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white'
      },
      profileLink: {
        backgroundColor: screen === 'profile' ? '#191970' : null,
      },
      profileLinkText: {
        color: screen === 'profile' ? 'white' : 'black',
      },
      postLink: {
        backgroundColor: screen === 'post' ? '#191970' : null,
      },
      postLinkText: {
        color: screen === 'post' ? 'white' : 'black',
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
        fontSize: width === 'xs' ? 28 : 36,
        fontWeight: '700',
        color: 'black',
      },
      linkTag: {
        textDecorationLine: 'none',
      },
    });

    return (
      <Router>
        <View
          style={styles.container}
        >
          <Link
            to='/'
            style={{ textDecoration: 'none', }}
            onClick={() => changeScreen('main')}
          >
            <Text
              style={[styles.english, styles.headerText]}
            >
              Naoki Yumura
            </Text>
          </Link>
          <View
            style={styles.tabAlign}
          >
            <View
              style={[styles.link, styles.profileLink]}
            >
              <Link
                to='profile'
                style={{ textDecorationLine: 'none' }}
                onClick={() => changeScreen('profile')}
              >
                <Text
                  style={[styles.linkText, styles.english, styles.profileLinkText]}
                >
                  Profile
                </Text>
              </Link>
            </View>
            <View
              style={[styles.link, styles.postLink]}
            >
              <Link
                to='post'
                style={{ textDecorationLine: 'none' }}
                onClick={() => changeScreen('post')}
              >
                <Text
                  style={[styles.linkText, styles.english, styles.postLinkText]}
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



export default withWidth()(App);
