import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import codePush from "react-native-code-push";
import firebase from 'react-native-firebase';

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

import RootNavigator from './src/index.navigation';

class App extends React.Component {
  componentDidMount() {
    this.registerPush();
  }

  registerPush = () => {
    firebase.messaging().getToken()
      .then((token) => {
        console.log(token);
      });
    firebase.messaging().onTokenRefresh((token) => {
    });
    firebase.messaging().onMessage((message) => {
      var m = '';
      if (Platform.OS == 'ios') {
        m = message.fcm.body;
      } else {
        m = message.fcm.body;
      }
      if (m && m.length > 0) {
        alert(m);
      }
    });
  }

  render() {
    return (<RootNavigator />);
  }
}

App = codePush(codePushOptions)(App);

export default App;
