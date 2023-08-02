import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BusinessStack} from '../stackNavigators/business/BusinessStack';
import {EventStack} from '../stackNavigators/event/EventStack';
import {SettingStack} from '../stackNavigators/setting/SettingStack';
import React from 'react';
import {BuildingIcon, CalendarIcon, SettingsIcon} from '../../assets/icons';
import {theme} from '../../theme/theme';
const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Business"
      screenOptions={{
        title: '●',
        tabBarStyle: {},
        tabBarLabelStyle: {fontSize: 7},
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.colors.primary,
      }}>
      <Tab.Screen
        name="Business"
        component={BusinessStack}
        options={{
          tabBarIcon: ({color, size}) => {
            return <BuildingIcon width={size} height={size} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventStack}
        options={{
          tabBarIcon: ({color, size}) => {
            return <CalendarIcon width={size} height={size} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStack}
        options={{
          tabBarIcon: ({color, size}) => {
            return <SettingsIcon width={size} height={size} fill={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
