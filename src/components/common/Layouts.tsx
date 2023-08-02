import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

type layoutPropsType = {
  children: any;
  style?: ViewStyle;
};
export const VStack = ({children, style}: layoutPropsType) => {
  return <View style={[styles.VStackStyle, style]}>{children}</View>;
};
export const HStack = ({children, style}: layoutPropsType) => {
  return <View style={[styles.HStackStyle, style]}>{children}</View>;
};
export const Center = ({children, style}: layoutPropsType) => {
  return <View style={[styles.CenterStyle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  VStackStyle: {
    flexDirection: 'column',
  },
  HStackStyle: {
    flexDirection: 'row',
  },
  CenterStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
