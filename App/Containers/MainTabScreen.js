import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as TabScreens from './TabScreens';


const screens = Object.keys(TabScreens).reduce((routes, key, index) => {
    const path = index === 0 ? '/' : `/${key.toLowerCase()}`;
    routes[key] = {
        screen: TabScreens[key],
        path: path
    };

    return routes;
}, {});

const MainTabScreen = TabNavigator(screens,
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);


export default MainTabScreen;