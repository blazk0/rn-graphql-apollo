import React from 'react';
import { FlatList } from 'react-native';

import { Container, Loading } from '@components/common';
import { useGetUsersQuery } from '@generated/graphql';
import UserItem from '@components/users/UserItem';

const Users = () => {
  const { loading, data } = useGetUsersQuery();

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data?.users?.data || []}
          keyExtractor={(item) => item?.id as string}
          renderItem={({ item }) => <UserItem user={item} />}
        />
      )}
    </Container>
  );
};

export default Users;
