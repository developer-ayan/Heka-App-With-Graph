/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// import {AppRegistry} from 'react-native';  

// import App from './App';  
// import {name as appName} from './app.json';  
  
// AppRegistry.registerComponent(appName, () => App);  

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {Provider} from 'react-redux'; 
import {name as appName} from './app.json';
import store from './src/Stores/Tabs/store'
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
