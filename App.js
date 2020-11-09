import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './HomeScreen';
import BrowserScreen from './BrowserScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({
      title: 'Home'
    }),
  },
  Browser: {
    screen: BrowserScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title
    }),
  }
});

const AppNavigator = createBottomTabNavigator(
  { 
    Home: HomeStack
  },
  {
    // initial route rendered when app first mounts
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Home') {
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-home`;
        }

        return <Ionicons name={iconName} size={20} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: '#556',
      },
    }),
  }
);

export default createAppContainer(AppNavigator);

// expo init my-app
// expo install react-navigation react-navigation-stack react-navigation-tabs
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// expo install react-native-webview
