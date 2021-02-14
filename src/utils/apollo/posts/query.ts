import { FieldPolicy } from '@apollo/client';

const postsQuery: { posts: FieldPolicy } = {
  posts: {
    keyArgs: false,
    merge(existing = [], incoming, { args }) {
      let data;

      if (args?.options.paginate.page > 1) {
        data = {
          __typename: 'PostsPage',
          data: [...existing.data, ...incoming.data],
        };
      } else {
        data = incoming;
      }

      return data;
    },
  },
};

export default postsQuery;
