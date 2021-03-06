import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PostStack from './PostStack';

const AppContainer = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Posts" component={PostStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
