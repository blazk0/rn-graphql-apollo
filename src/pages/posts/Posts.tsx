import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

import { useGetPostsQuery } from '@generated/graphql';
import { Container, Loading } from '@components/common';
import PostItem from '@components/posts/PostItem';
import { moderateScale, verticalScale } from '@utils/scaling';

const Posts = () => {
  const { loading, data } = useGetPostsQuery({
    variables: { options: { paginate: { page: 1 } } },
  });

  return (
    <Container containerStyle={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data?.posts?.data || []}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          ListHeaderComponent={<Text style={styles.title}>Posts</Text>}
          renderItem={({ item }) => <PostItem post={item} />}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
  },
  title: {
    fontSize: moderateScale(20),
    textAlign: 'left',
    marginBottom: verticalScale(15),
  },
  flatListContainer: {
    paddingVertical: verticalScale(20),
  },
});

export default Posts;
