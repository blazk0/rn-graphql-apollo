import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
};

const Button = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
