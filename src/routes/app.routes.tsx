import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TabRoutes } from './tab.routes'

import { HomeScreen } from '../screens/Home'
import { PokemonDetailsScreen } from '../screens/PokemonDetails'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Pokemons">
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
        component={PokemonDetailsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icons
              name="arrow-left"
              size={24}
              color="#FFB84D"
              onPress={() => navigation.goBack()}
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 24,
          },
          headerRight: () => <Icons name="heart" size={24} color="#FFB84D" />,
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
