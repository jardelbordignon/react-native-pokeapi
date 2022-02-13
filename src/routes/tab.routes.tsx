import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import { PokemonsScreen } from '../screens/Pokemons'
import { FavoritesScreen } from '../screens/Favorites'
import theme from 'src/styles/theme.json'

const { Navigator, Screen } = createBottomTabNavigator()

export const TabRoutes = () => (
  <Navigator
    screenOptions={{
      tabBarActiveTintColor: theme.colors.primary,
    }}
  >
    <Screen
      name="Cards"
      component={PokemonsScreen}
      options={() => ({
        tabBarLabel: 'Pokemons',
        tabBarIcon: ({ color, size }) => (
          <Icons name="view-list" color={color} size={size} />
        ),
      })}
    />

    <Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarLabel: 'Favoritos',
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
