import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import Home from '../components/Home';
import Search from '../components/Search';
import Community from '../components/Community';
import Docs from '../components/Docs';
import Profile from '../components/Profile';

export default createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon name="md-home" focused={focused} />
                )
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon name="md-search" focused={focused} />
                )
            }
        },
        Community: {
            screen: Community,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon name="md-contacts" focused={focused} />
                )
            }
        },
        Docs: {
            screen: Docs,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon name="md-bookmarks" focused={focused} />
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon name="md-person" focused={focused} />
                )
            }
        }
    },
    {
        initialRouteName: 'Docs',
        tabBarOptions: {
            activeTintColor: 'black',
            showIcon: true,
            showLabel: false
        }
    }
);
