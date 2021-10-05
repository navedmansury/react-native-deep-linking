import React, {useEffect, useState} from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import Add from './Add';

import * as RootNavigation from '../RootNavigation';
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Add" component={Add} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
