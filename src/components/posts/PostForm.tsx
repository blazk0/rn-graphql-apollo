import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, StyleSheet } from 'react-native';

import { Container, Button } from '@components/common';
import { FormWrap, Input } from '@components/Form';
import { Post } from '@generated/graphql';
import { yupResolver } from '@hookform/resolvers/yup';
import { postData } from '@utils/formTypes/posts';
import { moderateScale, verticalScale, scale } from '@utils/scaling';
import { postFormSchema } from '@utils/schemas/posts';

type Props = {
  post?: Post | null;
  title: string;
  onSubmit: (data: postData) => void;
};

const PostForm = ({ post, title, onSubmit }: Props) => {
  const { control, errors, handleSubmit } = useForm<postData>({
    resolver: yupResolver(postFormSchema),
  });

  return (
    <Container>
      <Text style={styles.title}>{title}</Text>

      <FormWrap control={control}>
        <Input
          name="title"
          placeholder="Title"
          error={errors.title}
          defaultVal={post?.title}
          multiline
        />

        <Input
          name="body"
          placeholder="Body"
          error={errors.body}
          defaultVal={post?.body}
          multiline
        />

        <Button
          text={title}
          onPress={handleSubmit(onSubmit)}
          containerStyle={styles.btn}
        />
      </FormWrap>
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

export default PostForm;
