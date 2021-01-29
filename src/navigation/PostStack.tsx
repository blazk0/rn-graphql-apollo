import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import Posts from '@pages/posts/Posts';
import Post from '@pages/posts/EditPost';
import AddPost from '@pages/posts/AddPost';
import Button from '@components/common/Button';
import { scale } from '@utils/scaling';

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
          headerRightContainerStyle: styles.rightBtn,
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
  rightBtn: {
    marginRight: scale(20),
  },
});

export default PostStack;
