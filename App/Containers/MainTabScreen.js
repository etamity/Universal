import React from 'react';
import {ScrollView, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as TabScreens from './TabScreens';
import { ApplicationStyles } from '../Themes/'
import { Button } from 'teaset'

const screens = Object.keys(TabScreens).reduce((routes, key, index) => {
    const path = index === 0 ? '/' : `/${key.toLowerCase()}`;
    routes[key] = {
        screen: TabScreens[key],
        path: path,
        navigationOptions: ({ navigation }) => ({
            title: TabScreens[key].navigationOptions.headerTitle,
            ...ApplicationStyles.header
        })
    };

    return routes;
}, {});

const MainTabScreen = TabNavigator(screens,
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: ApplicationStyles.tabbar.activeTintColor,
            ...ApplicationStyles.tabbar
        },
        configureTransition: (currentTransitionProps, nextTransitionProps) => ({
            timing: 0,
            tension: 0.1,
            friction: 5
        })
    }
);


export default MainTabScreen;
