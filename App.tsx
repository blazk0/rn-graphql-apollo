import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AppContainer from '@navigation/index';

import './ReactotronConfig';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Post: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
};

export default App;
