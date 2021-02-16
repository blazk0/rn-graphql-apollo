import React, { Children, cloneElement, FC, isValidElement } from 'react';
import { View } from 'react-native';
import { Control } from 'react-hook-form';

type Props = {
  control: Control;
};

const FormWrap: FC<Props> = ({ children, control }) => {
  const childrenProps = () =>
    Children.map(children, (child) => {
      if (!isValidElement(child)) {
        return child;
      }

      if (child.props.name) {
        return cloneElement(child, { control });
      }

      return child;
    });

  return <View>{childrenProps()}</View>;
};

export default FormWrap;
