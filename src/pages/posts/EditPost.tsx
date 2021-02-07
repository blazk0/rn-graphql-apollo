import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { useUpdatePostMutation } from '@generated/graphql';
import { paramTypes } from '@navigation/paramTypes';
import { postData } from '@utils/formTypes/posts';
import PostForm from '@components/posts/PostForm';
import { useGetPost } from '@hooks/posts';

type Props = {
  route: RouteProp<paramTypes, 'EditPost'>;
  navigation: StackNavigationProp<paramTypes>;
};

const EditPost = ({ route, navigation }: Props) => {
  const [mutate] = useUpdatePostMutation({
    onCompleted: () => navigation.goBack(),
  });
  const post = useGetPost(route.params.postId as string);

  const onSubmit = (data: postData) => {
    mutate({
      variables: {
        id: post?.id as string,
        input: data,
      },
    });
  };

  return <PostForm post={post} title="Update Post" onSubmit={onSubmit} />;
};

export default EditPost;
