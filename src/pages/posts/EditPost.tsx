import React from 'react';
import { Text } from 'react-native';
import { paramTypes } from '@navigation/paramTypes';
import { RouteProp } from '@react-navigation/native';
import { useApolloClient } from '@apollo/client';

import { Post, PostSnippetFragmentDoc } from '@generated/graphql';
import Container from '@components/common/Container';

type Props = {
  route: RouteProp<paramTypes, 'EditPost'>;
};

const EditPost = ({ route }: Props) => {
  const { postId } = route.params;
  const client = useApolloClient();
  const post = client.readFragment<Post>({
    id: `Post:${postId}`,
    fragment: PostSnippetFragmentDoc,
  });

  return (
    <Container>
      <Text>{post?.title}</Text>
      <Text>{post?.body}</Text>
    </Container>
  );
};

export default EditPost;
