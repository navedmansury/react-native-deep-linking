import React, {useEffect, useState} from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as RootNavigation from './RootNavigation';

//bring in all screen

import HomeStackScreen from './screen/HomeStackScreen';
import SettingStackScreen from './screen/SettingStackScreen';

const Tab = createBottomTabNavigator();

const config = {
  screens: {
    HomeStackScreen: {
      screens: {
        Home: 'homestackscreen/home',
        Add: 'homestackscreen/add',
      },
    },
    SettingStackScreen: {
      screens: {
        Setting: 'settingstackscreen/setting',
        Edit: 'settingstackscreen/edit',
      },
    },
  },
};

const App = () => {
  const [data, setData] = useState(null);

  const linking = {
    prefixes: ['https://dummyapp.com', 'dummyapp://'],
    config,
  };

  // function handleDeepLink(event) {
  //   let data = event.url;
  //   setData(data);
  // }

  // useEffect(() => {
  //   async function getInitialUrl() {
  //     const initialUrl = await Linking.getInitialURL();
  //     if (initialUrl) setData(initialUrl);
  //   }

  //   Linking.addEventListener('url', handleDeepLink);

  //   if (!data) {
  //     getInitialUrl();
  //   }

  //   return () => {
  //     Linking.removeEventListener('url');
  //   };
  // }, [data]);

  // return (
  //   <NavigationContainer linking={linking} ref={RootNavigation.navigationRef}>
  //     <Stack.Navigator initialRouteName="Home">
  //       <Stack.Screen
  //         name="Home"
  //         component={Home}
  //         options={{
  //           headerStyle: {
  //             backgroundColor: '#0f4c75',
  //           },
  //           title: 'Andy App',
  //           headerTitleStyle: {
  //             textAlign: 'center',
  //             color: '#00b7c2',
  //           },
  //         }}
  //       />

  //       <Stack.Screen
  //         name="Add"
  //         component={Add}
  //         options={{
  //           headerStyle: {
  //             backgroundColor: '#0f4c75',
  //           },
  //           title: 'Andy App',
  //           headerTitleStyle: {
  //             textAlign: 'center',
  //             color: '#00b7c2',
  //           },
  //         }}
  //       />

  //       <Stack.Screen
  //         name="Edit"
  //         component={Edit}
  //         options={{
  //           headerStyle: {
  //             backgroundColor: '#0f4c75',
  //           },
  //           title: 'Andy App',
  //           headerTitleStyle: {
  //             textAlign: 'center',
  //             color: '#00b7c2',
  //           },
  //         }}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

  return (
    <NavigationContainer linking={linking} ref={RootNavigation.navigationRef}>
      <Tab.Navigator initialRouteName="HomeStackScreen">
        <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} />
        <Tab.Screen name="SettingStackScreen" component={SettingStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
