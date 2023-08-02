import {Category} from './Category';
import React from 'react';
import {HStack, VStack} from './Layouts';
import {StyleSheet} from 'react-native';
import {CustomText} from '../Text';
import {ArrowLeftIcon} from '../../assets/icons';
import {theme} from '../../theme/theme';

export const SubCategoryList = ({
  mainCategory,
  onCategoryPressed,
}: {
  mainCategory: string;
  onCategoryPressed: (category: string) => void;
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
        {mainCategory}
      </CustomText>
      <HStack style={styles.container}>
        {categories.map(item => {
          return (
            <Category category={item} key={item} onPress={onCategoryPressed} />
          );
        })}
      </HStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginTop: '5%',
    // alignSelf: 'center',
    marginLeft: '7%',
    fontWeight: '500',
    marginBottom: '10%',
    borderBottomWidth: 1,
  },
  container: {
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    width: '100%',
  },
});
