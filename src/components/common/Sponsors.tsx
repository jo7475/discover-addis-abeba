import FastImage from 'react-native-fast-image';
import {AirLines, CBE, EthioTelecom} from '../../assets/images';
import {Center, HStack, VStack} from './Layouts';
import React from 'react';
import {CustomText} from '../Text';

export const Sponsors = () => {
  const sponsors = [AirLines, CBE, EthioTelecom];
  return (
    <VStack
      style={{
        paddingHorizontal: '5%',
        borderWidth: 0.3,
        marginVertical: 10,
        borderColor: 'gray',
        paddingBottom: 10,
      }}>
      <CustomText
        variant="TitleBoldLarge"
        style={{
          marginBottom: 10,
          marginTop: 25,
          alignSelf: 'center',
        }}>
        Brand Sponsors
      </CustomText>
      <HStack
        style={{
          justifyContent: 'space-between',
        }}>
        {sponsors.map((item, index) => (
          <Center
            key={index}
            style={{
              // borderWidth: 0.3,
              // borderColor: 'gray',
              width: '30%',
              aspectRatio: 1 / 1,
              borderRadius: 50,
            }}>
            <FastImage
              style={{width: '100%', height: '100%'}}
              source={item}
              resizeMode="contain"
            />
          </Center>
        ))}
      </HStack>
    </VStack>
  );
};
