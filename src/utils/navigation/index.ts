import React from 'react';
import {
  DrawerActions,
  NavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: string, params: any) => {
  navigationRef.current?.navigate(name, params);
};

export const toggleDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
};
