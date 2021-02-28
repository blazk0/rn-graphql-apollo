import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PostStack from './PostStack';
import UserStack from './UserStack';
import { navigationRef } from '@utils/navigation';

const AppContainer = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator>
        <Stack.Screen name="Posts" component={PostStack} />
        <Stack.Screen name="Users" component={UserStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
