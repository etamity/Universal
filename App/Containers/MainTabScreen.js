import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as TabScreens from './TabScreens';
import { ApplicationStyles } from '../Themes/'

const screens = Object.keys(TabScreens).reduce((routes, key, index) => {
    const path = index === 0 ? '/' : `/${key.toLowerCase()}`;
    routes[key] = {
        screen: TabScreens[key],
        path: path,
        navigationOptions: ({ navigation }) => ({
            title: TabScreens[key].navigationOptions.headerTitle,
            headerTitleStyle: ApplicationStyles.header.titleStyle,
            headerStyle: ApplicationStyles.header.headerStyle,
        })
    };

    return routes;
}, {});

const MainTabScreen = TabNavigator(screens,
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: ApplicationStyles.tabbar.activeTintColor,
        },
    }
);


export default MainTabScreen;
