import { InMemoryCacheConfig, QueryHookOptions } from '@apollo/client';
import { GetPostsQuery, GetPostsQueryVariables } from '@generated/graphql';
import postsQuery from './posts/query';

export const memoryCache: InMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        ...postsQuery,
      },
    },
  },
};

export const createPaginationObj: (
  page: number,
  limit?: number,
) => QueryHookOptions<GetPostsQuery, GetPostsQueryVariables> = (
  page,
  limit = 20,
) => ({
  variables: {
    options: {
      paginate: {
        page,
        limit,
      },
    },
  },
});
