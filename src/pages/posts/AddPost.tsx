import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { useAddPostMutation } from '@generated/graphql';
import { postData } from '@utils/formTypes/posts';
import PostForm from '@components/posts/PostForm';
import { paramTypes } from '@navigation/paramTypes';

type Props = {
  navigation: StackNavigationProp<paramTypes>;
};

const AddPost = ({ navigation }: Props) => {
  const [mutate] = useAddPostMutation({
    onCompleted: () => navigation.goBack(),
  });

  const onSubmit = (data: postData) => {
    mutate({
      variables: {
        input: data,
      },
    });
  };

  return <PostForm title="Add Post" onSubmit={onSubmit} />;
};

export default AddPost;
