import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import { scale, verticalScale } from '@utils/scaling';

type Props = TextInputProps & {
  control: Control;
  name: string;
  error?: FieldError;
  value?: string;
};

const Input = ({ control, name, placeholder, value, ...props }: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            {...props}
          />
        )}
        name={name}
        defaultValue={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: scale(10),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    marginBottom: verticalScale(20),
  },
});

export default Input;
