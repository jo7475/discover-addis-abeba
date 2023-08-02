import FastImage from 'react-native-fast-image';
import {HStack, VStack} from '../common/Layouts';
import {CustomText} from '../Text';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export const BusinessCard = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity
      style={{marginHorizontal: 15, marginVertical: 20}}
      onPress={onPress}>
      <HStack style={{}}>
        <FastImage
          source={{
            uri: 'https://media.istockphoto.com/id/1061941548/photo/the-sheraton-grand-phoenix-located-in-downtown-phoenix-arizona.jpg?s=612x612&w=0&k=20&c=SDcX-SsENwV8Cs_Qvdx2wuuShWvUlrpwHkgY1uYNFgQ=',
          }}
          style={{width: 60, height: 60, borderRadius: 10}}
        />
        <VStack style={{paddingLeft: 15, marginTop: 5}}>
          <CustomText variant="BoldText">Sheraton Addis</CustomText>
          <CustomText>Luxury hotel with spa, outdoor pool, and...</CustomText>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};
