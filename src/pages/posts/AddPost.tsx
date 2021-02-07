import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { PostSnippetFragmentDoc, useAddPostMutation } from '@generated/graphql';
import { postData } from '@utils/formTypes/posts';
import PostForm from '@components/posts/PostForm';
import { paramTypes } from '@navigation/paramTypes';

type Props = {
  navigation: StackNavigationProp<paramTypes>;
};

const AddPost = ({ navigation }: Props) => {
  const [mutate] = useAddPostMutation({
    onCompleted: () => navigation.goBack(),
    update(cache, { data }) {
      cache.modify({
        fields: {
          posts(posts: any) {
            const newPost = cache.writeFragment({
              data: data?.createPost,
              fragment: PostSnippetFragmentDoc,
            });

            return [...posts.data, newPost];
          },
        },
      });
    },
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
