import {createStackNavigator} from '@react-navigation/stack';
import {Businesses} from '../../../screens/businesses/Businesses';
import {Settings} from '../../../screens/settings/Settings';
import React from 'react';

const Stack = createStackNavigator();

export function SettingStack() {
  return (
    <Stack.Navigator initialRouteName="User Settings">
      <Stack.Screen name="User Settings" component={Settings} />
    </Stack.Navigator>
  );
}
