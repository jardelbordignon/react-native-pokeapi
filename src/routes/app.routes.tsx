import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Feather'
import { TabRoutes } from './tab.routes'

import { HomeScreen } from '../screens/Home'
import { PokemonsScreen } from '../screens/Pokemons'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Home">
      <Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Screen
        name="MainBottom"
        component={TabRoutes}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Screen
        name="PokemonDetails"
        component={PokemonsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={24}
              color="#FFB84D"
              onPress={() => navigation.goBack()}
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 24,
          },
          headerRight: () => <Icon name="heart" size={24} color="#FFB84D" />,
          headerRightContainerStyle: {
            marginRight: 24,
          },
          headerTitle: 'Prato - Massas',
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Poppins-regular',
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: '#C72828',
            elevation: 0,
            borderWidth: 0,
            shadowColor: 'transparent',
          },
        })}
      />
    </Navigator>
  </NavigationContainer>
)
