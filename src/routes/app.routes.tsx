import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'react-native'

import { HomeScreen } from '../screens/Home'
import { MainContent } from '../screens/main'
import { UsersContent } from '../screens/user'
import { PokemonDetailsScreen } from 'src/screens/main/PokemonDetails'
import { Profile } from 'src/screens/user/Profile'

import theme from 'src/styles/theme.json'
import logo from 'src/assets/pokeapi.png'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Users">
      <Screen name="Home" component={HomeScreen} />
      <Screen
        name="Main"
        component={MainContent}
        options={{
          // title: 'Pokemons',
          // headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitle: () => (
            <Image
              style={{ height: 45, marginBottom: 10 }}
              source={logo}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center',
        }}
      />

      <Screen
        name="Users"
        component={UsersContent}
        options={{
          // title: 'Pokemons',
          // headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitle: () => (
            <Image
              style={{ height: 45, marginBottom: 10 }}
              source={logo}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center',
        }}
      />

      <Screen name="PokemonDetails" component={PokemonDetailsScreen} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  </NavigationContainer>
)
