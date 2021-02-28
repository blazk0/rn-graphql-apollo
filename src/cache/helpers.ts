import { InMemoryCacheConfig, QueryHookOptions } from '@apollo/client';
import postsQuery from './posts/query';
import usersQuery from './users/query';

export const memoryCache: InMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        ...postsQuery,
        ...usersQuery,
      },
    },
  },
};

export const createPaginationObj: (
  page: number,
  limit?: number,
) => QueryHookOptions = (page, limit = 20) => ({
  variables: {
    options: {
      paginate: {
        page,
        limit,
      },
    },
  },
});
