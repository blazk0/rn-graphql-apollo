import { ApolloCache, FetchResult } from '@apollo/client';
import {
  AddPostMutation,
  DeletePostMutation,
  PostSnippetFragmentDoc,
} from '@generated/graphql';

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

export const handleDeletePost = (
  cache: ApolloCache<DeletePostMutation>,
  id: string,
) => {
  cache.modify({
    fields: {
      posts(existingPosts) {
        const newPosts = existingPosts.data.filter(
          (postItem: any) => postItem.__ref !== `Post:${id}`,
        );

        return {
          __typename: 'PostsPage',
          data: newPosts,
        };
      },
    },
  });
};
