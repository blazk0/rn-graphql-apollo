import React, { FC } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { scale } from '@utils/scaling';

type Props = {
  scrollEnabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

const Container: FC<Props> = ({ children, scrollEnabled, containerStyle }) => {
  if (scrollEnabled) {
    <ScrollView
      contentContainerStyle={[styles.container, containerStyle]}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>;
  }

  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
});

export default Container;
