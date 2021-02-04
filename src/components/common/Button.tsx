import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const Button = ({ text, onPress, containerStyle }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
