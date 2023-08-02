import {Dimensions, View, useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView} from 'react-native-gesture-handler';
import React from 'react';
import {Center, HStack} from './Layouts';
import {theme} from '../../theme/theme';

export const Carousel = ({pictures}: {pictures: {uri: string}[]}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{height: 175}}
        decelerationRate={0}
        snapToAlignment="center"
        snapToInterval={270}
        scrollEventThrottle={16}>
        {pictures.map(item => {
          return (
            <FastImage
              source={item}
              style={{
                width: 250,
                height: '100%',
                marginHorizontal: 10,
              }}
            />
          );
        })}
      </ScrollView>
      <Center style={{width: '100%', marginVertical: 10}}>
        <HStack>
          {pictures.map((item, index) => {
            return (
              <View
                style={{
                  width: 10,
                  aspectRatio: 1 / 1,
                  borderRadius: 10,
                  backgroundColor: index === 0 ? theme.colors.primary : 'gray',
                  marginHorizontal: 5,
                }}
              />
            );
          })}
        </HStack>
      </Center>
    </View>
  );
};
