import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SchemeProfile from '../components/SchemeProfile';

export default createAppContainer(
    createStackNavigator(
        {
            Main: MainTabNavigator,
            SchemeProfile: SchemeProfile
        },
        {
            initialRouteName: 'Main',
            headerMode: 'none'
        }
    )
);
