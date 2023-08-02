import {TextInput, View} from 'react-native';
import React from 'react';
import {HStack} from '../../components/common/Layouts';
import FastImage from 'react-native-fast-image';
import {AppLogo} from '../../assets/images';
import {Sponsors} from '../../components/common/Sponsors';

export function Events() {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <HStack style={{marginRight: '3%', alignItems: 'center'}}>
        <FastImage source={AppLogo} style={{width: 50, height: 50}} />
        <TextInput
          placeholder="Search for events"
          style={{
            backgroundColor: '#F6F6F6',
            flex: 1,
            paddingLeft: 10,
            height: 40,
            borderRadius: 15,
          }}
        />
      </HStack>
      <Sponsors />
    </View>
  );
}
