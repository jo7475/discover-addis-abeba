import {Category} from './Category';
import React from 'react';
import {HStack, VStack} from './Layouts';
import {StyleSheet} from 'react-native';
import {CustomText} from '../Text';

export const CategoryList = ({
  onCategoryPressed,
}: {
  onCategoryPressed: (category: string) => void;
}) => {
  const categories = [
    'Tourist Attractions',
    'Int. Org & NGO',
    'Hotels & Hospitality',
    'Banks & Insu.',
    'Gov Offices',
    'Ride Hailing',
    'Businesses',
    'Others',
  ];
  return (
    <VStack>
      <CustomText style={styles.headerText} variant="TitleNormalLarge">
        Categories
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
    alignSelf: 'center',
    fontWeight: '500',
    marginBottom: '10%',
  },
  container: {
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    width: '100%',
  },
});
