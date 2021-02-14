import { ApolloCache, FetchResult } from '@apollo/client';
import { AddPostMutation, PostSnippetFragmentDoc } from '@generated/graphql';

export const handleAddPost = (
  cache: ApolloCache<AddPostMutation>,
  data: FetchResult<AddPostMutation>,
) => {
  cache.modify({
    fields: {
      posts(existingPosts) {
        const newPostRef = cache.writeFragment({
          data: data?.data?.createPost,
          fragment: PostSnippetFragmentDoc,
        });

        return {
          __typename: 'PostsPage',
          data: [newPostRef, ...existingPosts.data],
        };
      },
    },
  });
};
