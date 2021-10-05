import React, {useEffect, useState} from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Edit from './Edit';
import Setting from './Setting';

import * as RootNavigation from '../RootNavigation';
const SettingsStack = createStackNavigator();
function SettingStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Setting" component={Setting} />
      <SettingsStack.Screen name="Edit" component={Edit} />
    </SettingsStack.Navigator>
  );
}
export default SettingStackScreen;
