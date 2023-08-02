import {createStackNavigator} from '@react-navigation/stack';
import {Businesses} from '../../../screens/businesses/Businesses';
import {Events} from '../../../screens/events/Events';
import React from 'react';

const Stack = createStackNavigator();

export function EventStack() {
  return (
    <Stack.Navigator
      initialRouteName="Event Screen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Event Screen" component={Events} />
    </Stack.Navigator>
  );
}
