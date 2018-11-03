import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import './index.css';
import AppConnected from './container/app';
import store from './store/index';
import * as serviceWorker from './serviceWorker';

const AppWrapper = () => (
  <Provider store={store}>
    <AppConnected />
  </Provider>
)

AppRegistry.registerComponent('App', () => AppWrapper);
AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
