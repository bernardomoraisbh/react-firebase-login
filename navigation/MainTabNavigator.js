import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


import TabBarIcon from '../components/TabBarIcon';
import ClienteScreen from '../screens/ClienteScreen';
import GerenteScreen from '../screens/GerenteScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

/* Tela Inicial Cliente */
const ClienteStack = createStackNavigator(
  {
    Cliente: ClienteScreen,
  },
  config
);

ClienteStack.navigationOptions = {
  tabBarLabel: 'Cliente',
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

ClienteStack.path = '';
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

const tabNavigator = createMaterialTopTabNavigator({
  ClienteStack,
  GerenteStack,
});

tabNavigator.path = '';

export default tabNavigator;
