import {StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';

export const CustomText = ({
  children,
  style,
  variant = 'NormalText',
}: {
  children: string | Element;
  style?: TextStyle;
  variant?: 'TitleBoldLarge' | 'TitleNormalLarge' | 'NormalText' | 'BoldText';
}) => {
  return (
    <Text style={[styles?.position, styles[variant], style]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  TitleBoldLarge: {
    fontSize: 25,
    fontWeight: '700',
  },
  TitleNormalLarge: {
    fontSize: 25,
    fontWeight: '400',
  },
  Normal: {},
  BoldText: {
    fontWeight: '700',
  },
});
