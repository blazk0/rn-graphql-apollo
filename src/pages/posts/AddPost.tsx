import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAddPostMutation } from '@generated/graphql';
import { Input } from '@components/Form';
import { Button, Container } from '@components/common';
import { addPostSchema } from '@utils/schemas/posts';
import { addPostData } from '@utils/formTypes/posts';
import { moderateScale, scale, verticalScale } from '@utils/scaling';

const AddPost = () => {
  const [mutate] = useAddPostMutation();
  const { control, errors, handleSubmit } = useForm<addPostData>({
    resolver: yupResolver(addPostSchema),
  });

  const onSubmit = (data: addPostData) => {
    mutate({
      variables: {
        input: data,
      },
    });
  };

  return (
    <Container>
      <Text style={styles.title}>Add Post</Text>

      <Input
        name="title"
        placeholder="Title"
        control={control}
        error={errors.title}
      />

      <Input
        name="body"
        placeholder="Body"
        control={control}
        error={errors.body}
      />

      <Button
        text="Add Post"
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

export default AddPost;
