import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

import { paramTypes } from '@navigation/paramTypes';
import { Post } from '@generated/graphql';
import { moderateScale, verticalScale } from '@utils/scaling';

type Props = {
  post: Post | null;
};

const PostItem = ({ post }: Props) => {
  const navigation = useNavigation<StackNavigationProp<paramTypes>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('EditPost', { postId: post?.id })}>
      <Text style={styles.title}>{post?.title}</Text>
      <Text>{post?.body}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: verticalScale(10),
    backgroundColor: '#fff',
    marginBottom: verticalScale(10),
    borderRadius: 10,
  },
  title: {
    marginBottom: verticalScale(5),
    fontSize: moderateScale(17),
    fontWeight: '600',
  },
});

export default PostItem;
