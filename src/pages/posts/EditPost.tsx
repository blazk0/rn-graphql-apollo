import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useApolloClient } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Post,
  PostSnippetFragmentDoc,
  useUpdatePostMutation,
} from '@generated/graphql';
import { paramTypes } from '@navigation/paramTypes';
import { Input } from '@components/Form';
import { Button, Container } from '@components/common';
import { moderateScale, verticalScale, scale } from '@utils/scaling';
import { updatePostData } from '@utils/formTypes/posts';
import { updatePostSchema } from '@utils/schemas/posts';

type Props = {
  route: RouteProp<paramTypes, 'EditPost'>;
};

const EditPost = ({ route }: Props) => {
  const [mutate] = useUpdatePostMutation();
  const { control, errors, handleSubmit } = useForm<updatePostData>({
    resolver: yupResolver(updatePostSchema),
  });
  const client = useApolloClient();
  const post = client.readFragment<Post>({
    id: `Post:${route.params.postId}`,
    fragment: PostSnippetFragmentDoc,
  });

  const onSubmit = (data: updatePostData) => {
    mutate({
      variables: {
        id: post?.id as string,
        input: data,
      },
    });
  };

  return (
    <Container>
      <Text style={styles.title}>Update Post</Text>

      <Input
        name="title"
        placeholder="Title"
        control={control}
        error={errors.title}
        value={post?.title as string}
        multiline
      />

      <Input
        name="body"
        placeholder="Body"
        control={control}
        error={errors.body}
        value={post?.body as string}
        multiline
      />

      <Button
        text="Update Post"
        onPress={handleSubmit(onSubmit)}
        containerStyle={styles.btn}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(18),
    textAlign: 'left',
    marginBottom: verticalScale(20),
  },
  btn: {
    backgroundColor: '#aaa',
    padding: scale(10),
    alignSelf: 'center',
    borderRadius: 10,
  },
});

export default EditPost;
