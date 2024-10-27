import './gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  ImmerseScreen,
  ContentScreen,
  FlashCardScreen,
  ProfileScreen,
} from './Navigation';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Immerse" component={ImmerseScreen} />
        <Tab.Screen name="Content" component={ContentScreen} />
        <Tab.Screen name="Flash Card" component={FlashCardScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
