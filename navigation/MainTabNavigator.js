import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import GerenteScreen from '../screens/GerenteScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

/* Tela Inicial Cliente */
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';
/* Fim Tela Inicial Cliente*/

/* Tela Inicial Gerente */
const GerenteStack = createStackNavigator(
  {
    Gerente: GerenteScreen,
  },
  config
);

GerenteStack.navigationOptions = {
  tabBarLabel: 'Gerente',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

GerenteStack.path = '';
/*Fim Tela Inicial Gerente */

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  GerenteStack,
});

tabNavigator.path = '';

export default tabNavigator;
