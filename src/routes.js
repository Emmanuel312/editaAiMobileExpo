import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Request from './pages/Request';
import Profile from './pages/Profile';

const App = createBottomTabNavigator(
  {
    Request: {
      screen: Request,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="ondemand-video" size={20} color={!focused ? '#000' : '#fff'} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <AntDesign name="user" size={20} color={!focused ? '#000' : '#fff'} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Request',
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#000',
      tabStyle: {
        paddingBottom: 5,
        paddingTop: 5,
      },
      style: {
        backgroundColor: '#e00000',
        borderTopWidth: 0,
      },
    },
  }
);

const Root = createSwitchNavigator(
  {
    Login,
    Register,
    App,
  },
  { initialRouteName: 'Login' }
);

const Routes = createAppContainer(Root);

export default Routes;
