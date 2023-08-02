import {createStackNavigator} from '@react-navigation/stack';
import {Businesses} from '../../../screens/businesses/Businesses';
import React from 'react';

const Stack = createStackNavigator();

export function BusinessStack() {
  return (
    <Stack.Navigator
      initialRouteName="Businesses"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Businesses" component={Businesses} />
    </Stack.Navigator>
  );
}
