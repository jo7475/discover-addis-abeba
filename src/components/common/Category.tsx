import {StyleSheet, TouchableOpacity} from 'react-native';
import {BuildingIcon} from '../../assets/icons';
import {CustomText} from '../Text';
import {VStack} from './Layouts';
import React from 'react';

export const Category = ({
  category,
  onPress,
}: {
  category: string;
  onPress: (category: string) => void;
}) => {
  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={() => onPress(category)}>
      <VStack style={styles.container}>
        <BuildingIcon />
        <CustomText>{category}</CustomText>
      </VStack>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    width: '25%',
    aspectRatio: 1 / 0.8,
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
});
