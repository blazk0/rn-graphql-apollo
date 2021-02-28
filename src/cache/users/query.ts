import { FieldPolicy } from '@apollo/client';

const usersQuery: { users: FieldPolicy } = {
  users: {
    keyArgs: false,
    merge(existing = [], incoming, options) {
      let data;

      if (options?.args?.options?.paginate?.page > 1) {
        data = {
          __typename: 'UsersPage',
          data: [...existing.data, ...incoming.data],
        };
      } else {
        data = incoming;
      }

      return data;
    },
  },
};

export default usersQuery;
