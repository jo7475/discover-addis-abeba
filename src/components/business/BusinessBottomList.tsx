import {useState} from 'react';
import {CategoryList} from '../common/CategoryList';
import {SubCategoryList} from '../common/SubCategoryList';
import React from 'react';
import {BusinessCardList} from './BusinessCardList';
import {BusinessDetail} from './BuisnessDetail';

export const BusinessBottomList = () => {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [business, setBusiness] = useState(null);
  return (
    <>
      {category === '' && subCategory === '' && (
        <CategoryList onCategoryPressed={setCategory} />
      )}
      {category !== '' && subCategory === '' && (
        <SubCategoryList
          onCategoryPressed={setSubCategory}
          mainCategory={category}
        />
      )}
      {category !== '' && subCategory !== '' && business === null && (
        <BusinessCardList
          category={category}
          subCategory={subCategory}
          onPress={setBusiness}
        />
      )}
      {business && <BusinessDetail />}
    </>
  );
};
