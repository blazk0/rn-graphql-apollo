import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { Maybe, User } from '@generated/graphql';
import { moderateScale, scale, verticalScale } from '@utils/scaling';

type Props = {
  user: Maybe<User>;
};

const UserItem = ({ user }: Props) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <TouchableOpacity
      onPress={() => setCollapsed(!collapsed)}
      style={styles.container}>
      <Text style={styles.title}>{user?.name}</Text>

      <Collapsible collapsed={collapsed} style={styles.contentContainer}>
        <Text style={styles.subtitle}>Username: {user?.username}</Text>
        <Text style={styles.subtitle}>Email: {user?.email}</Text>
        <Text style={styles.subtitle}>Mobile No: {user?.phone}</Text>
      </Collapsible>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: scale(10),
    marginBottom: verticalScale(10),
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
  contentContainer: {
    paddingTop: verticalScale(15),
  },
  subtitle: {
    fontSize: moderateScale(15),
    marginBottom: verticalScale(3),
  },
});

export default UserItem;
