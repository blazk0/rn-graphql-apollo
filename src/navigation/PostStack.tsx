import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import Posts from '@pages/posts/Posts';
import Post from '@pages/posts/EditPost';
import AddPost from '@pages/posts/AddPost';
import Button from '@components/common/Button';
import { scale } from '@utils/scaling';
import { toggleDrawer } from '@utils/navigation';

const PostStack = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Posts"
        component={Posts}
        options={{
          headerRight: () => (
            <Button text="Add" onPress={() => navigation.navigate('AddPost')} />
          ),
          headerLeft: () => <Button text="Drawer" onPress={toggleDrawer} />,
          headerRightContainerStyle: styles.btn,
          headerLeftContainerStyle: styles.btn,
        }}
      />
      <Stack.Screen
        name="EditPost"
        component={Post}
        options={{
          title: 'Edit Post',
        }}
      />
      <Stack.Screen
        name="AddPost"
        component={AddPost}
        options={{
          title: 'Add Post',
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginHorizontal: scale(20),
  },
});

export default PostStack;
