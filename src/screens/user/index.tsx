import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import { ProfileList } from './ProfileList'
import { Text } from 'src/components/base'

const { Navigator, Screen } = createBottomTabNavigator()

export const UsersContent = () => (
  <Navigator initialRouteName="ProfileList">
    <Screen
      name="ProfileList"
      component={ProfileList}
      options={() => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icons name="view-list" color={color} size={size} />
        ),
        headerRight: () => <Text color="light">Teste</Text>,
        tabBarLabel: 'Usuários',
      })}
    />

    {/* <Screen
      name="Profile"
      component={Profile}
      options={() => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icons name="view-list" color={color} size={size} />
        ),
      })}
    /> */}
  </Navigator>
)
