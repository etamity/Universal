import React, { Component } from 'react';
import { Button, Platform, ScrollView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MainModalScreen from './MainModalScreen';
const MainDrawerScreen = DrawerNavigator({
  MainStackScreen: {
    screen: MainModalScreen,
    navigationOptions: {
      drawerLabel: 'Main',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons
          name="move-to-inbox"
          size={24}
          style={{ color: tintColor }}
        />)
    },
  }
});

export default MainDrawerScreen;