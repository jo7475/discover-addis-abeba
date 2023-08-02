import FastImage from 'react-native-fast-image';
import {HStack, VStack} from '../common/Layouts';
import React from 'react';
import {CustomText} from '../Text';
import {theme} from '../../theme/theme';
import {Linking, TouchableOpacity, View} from 'react-native';
import {Carousel} from '../common/Carousel';

export const BusinessDetail = () => {
  const pictures = [
    {
      uri: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg',
    },
    {
      uri: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg',
    },
    {
      uri: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg',
    },
    {
      uri: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg',
    },
  ];
  return (
    <VStack>
      <HStack>
        <FastImage
          source={{
            uri: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg',
          }}
          style={{
            width: '43%',
            height: 100,
            marginRight: '3%',
            marginLeft: '2%',
          }}
        />
        <VStack style={{width: '50%'}}>
          <CustomText variant="BoldText">Sheraton Addis</CustomText>
          <CustomText variant="BoldText">24 hours open</CustomText>
          <CustomText variant="BoldText">Open now</CustomText>
        </VStack>
      </HStack>
      <VStack style={{paddingHorizontal: '5%', paddingTop: 10}}>
        <CustomText variant="BoldText">About</CustomText>
        <CustomText>
          No two rooms at Hotel Sorrento were created or decorated the same.
          Your stay with us is designed to be a distinctive step back in
          time.The culturally-curious know that when it's time to celebrate,
          raise a glass, and let loose, the go-to destination is an
          unforgettable space with unique history.
        </CustomText>
      </VStack>
      <VStack>
        <CustomText
          variant="BoldText"
          style={{textAlign: 'center', marginVertical: 10}}>
          Gallery
        </CustomText>
        <Carousel pictures={pictures} />
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'https://www.google.com/maps/place/Sheraton+Addis,+a+Luxury+Collection+Hotel,+Addis+Ababa/@9.0203037,38.7574278,17z/data=!3m1!4b1!4m9!3m8!1s0x164b85930b17ec2f:0x8a433f2230326db!5m2!4m1!1i2!8m2!3d9.0203037!4d38.7600027!16s%2Fm%2F0wxpcq9?entry=ttu',
            );
          }}
          style={{
            width: '30%',
            backgroundColor: theme.colors.primary,
            padding: 5,
            alignSelf: 'center',
            borderRadius: 25,
          }}>
          <View
            style={{
              width: '100%',
              backgroundColor: theme.colors.primary,
              paddingVertical: 5,
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 20,
              overflow: 'hidden',
            }}>
            <CustomText style={{textAlign: 'center', color: 'white'}}>
              Directions
            </CustomText>
          </View>
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
};
