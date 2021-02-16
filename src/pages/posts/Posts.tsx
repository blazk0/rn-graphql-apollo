import React, { useState } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

import { useGetPostsQuery } from '@generated/graphql';
import { Container, Loading } from '@components/common';
import PostItem from '@components/posts/PostItem';
import { moderateScale, verticalScale } from '@utils/scaling';
import { createPaginationObj } from '@cache/helpers';

const Posts = () => {
  const [page, setPage] = useState(1);
  const { loading, data, fetchMore } = useGetPostsQuery(
    createPaginationObj(page),
  );

  const getMorePosts = () => {
    fetchMore(createPaginationObj(page + 1));

    setPage(page + 1);
  };

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
          onEndReached={getMorePosts}
          onEndReachedThreshold={0.9}
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
