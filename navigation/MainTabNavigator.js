import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoriqueScreen from '../screens/HistoriqueScreen';
import NewScreen from '../screens/NewScreen';

const NewStack = createStackNavigator({
  New: NewScreen,
});

NewStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: '#5c4269',
    inactiveTintColor: 'black',
    style: {
      backgroundColor: '#ffee58'
    }
  },
  tabBarLabel: 'New',
};

const HistoriqueStack = createStackNavigator({
  Historique: HistoriqueScreen,
});

HistoriqueStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: '#5c4269',
    inactiveTintColor: 'black',
    style: {
      backgroundColor: '#ffee58'
    }
  },
  tabBarLabel: 'Historique',
};

export default createBottomTabNavigator({
  NewStack,
  HistoriqueStack,
});
