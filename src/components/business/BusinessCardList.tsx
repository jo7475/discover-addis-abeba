import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CustomText} from '../Text';
import {HStack, VStack} from '../common/Layouts';
import {BusinessCard} from './BusinessCard';
import {ArrowLeftIcon} from '../../assets/icons';
import {theme} from '../../theme/theme';

export const BusinessCardList = ({
  category,
  subCategory,
  onPress,
}: {
  category: string;
  subCategory: string;
  onPress: (item: any) => void;
}) => {
  const categories = [
    'Hotels',
    'Restaurants',
    'Guest Houses',
    'Fast Foods',
    'Cafe',
    'Traditional Restaurant',
    'Pensions',
    'Others',
  ];
  return (
    <VStack>
      <CustomText style={styles.headerText} variant="TitleNormalLarge">
        <ArrowLeftIcon width={30} height={30} fill={theme.colors.primary} />
        {subCategory}
      </CustomText>
      <HStack style={styles.container}>
        {categories.map(item => {
          return <BusinessCard onPress={() => onPress(item)} />;
        })}
      </HStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginTop: '5%',
    alignSelf: 'center',
    fontWeight: '500',
    // marginBottom: '10%',
  },
  container: {
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    width: '100%',
  },
});
