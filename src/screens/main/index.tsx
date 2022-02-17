import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import { PokemonsScreen } from './Pokemons'
import { FavoritesScreen } from './Favorites'

const { Navigator, Screen } = createBottomTabNavigator()

export const MainContent = () => {
  return (
    <Navigator initialRouteName="Pokemons">
      <Screen
        name="Pokemons"
        component={PokemonsScreen}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icons name="view-list" color={color} size={size} />
          ),
        })}
      />

      <Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icons name="star" color={color} size={size} />
          ),
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: '#ccc',
            marginLeft: 6,
            opacity: 0.6,
          },
        }}
      />
    </Navigator>
  )
}
