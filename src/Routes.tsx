import React from 'react';
import {View} from 'react-native';
import {BottomTabNavigation} from './navigation/tabBarNavigation/BottomTabNavigation';

export function Routes() {
  return (
    <View style={{flex: 1, height: '100%', width: '100%'}}>
      <BottomTabNavigation />
    </View>
  );
}
