import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import Home from '../components/Home';
import Search from '../components/Search';
import Docs from '../components/Docs';
import Profile from '../components/Profile';

export default createBottomTabNavigator({
    Home: {
        screen: Home
    },
    Search: {
        screen: Search
    },
    Docs: {
        screen: Docs
    },
    Profile: {
        screen: Profile
    }
});
