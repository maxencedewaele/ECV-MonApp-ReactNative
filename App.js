import React, { Component } from 'react';
import MainTabNavigator from './navigation/MainTabNavigator';

class App extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <MainTabNavigator />;
  }

}

export default App;