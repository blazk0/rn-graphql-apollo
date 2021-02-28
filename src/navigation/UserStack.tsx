import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Users from '@pages/users/Users';
import { Button } from '@components/common';
import { toggleDrawer } from '@utils/navigation';
import { StyleSheet } from 'react-native';
import { scale } from '@utils/scaling';
import AddUser from '@pages/users/AddUser';

const UserStack = () => {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Users"
        component={Users}
        options={{
          headerRight: () => (
            <Button
              text="Add User"
              onPress={() => navigation.navigate('AddUser')}
            />
          ),
          headerLeft: () => <Button text="Drawer" onPress={toggleDrawer} />,
          headerLeftContainerStyle: styles.btn,
          headerRightContainerStyle: styles.btn,
        }}
      />

      <Stack.Screen
        name="AddUser"
        component={AddUser}
        options={{ headerTitle: 'Add User' }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginHorizontal: scale(20),
  },
});

export default UserStack;
