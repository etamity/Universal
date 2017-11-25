import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as TabScreens from './TabScreens';

const MainTabScreen = TabNavigator(
  {
    MainTab: {
      screen: TabScreens.MainScreen,
      path: '/'
    },
    SettingsTab: {
      screen: TabScreens.SettingsScreen,
      path: '/settings',
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);


export default MainTabScreen;