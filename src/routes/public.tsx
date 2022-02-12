import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { Navigator, Screen } = createNativeStackNavigator()

import { HomeScreen } from 'src/screens/public/Home'
import { CardsScreen } from 'src/screens/public/Cards'
import theme from 'src/styles/theme.json'

export const PublicRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#f3511e' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen
        name="Cards"
        component={CardsScreen}
        options={() => ({
          title: 'Pokemons',
          headerRight: () => (
            <Icon
              color={theme.colors.dark}
              name="people"
              onLongPress={() => console.log('onLongPress()')}
              onPress={() => console.log('onPress()')}
              size={40}
            />
            // <Button
            //   type="clear"
            //   icon={<Icon name="plus" size={25} color="#fff" />}
            //   onPress={() => navigation.navigate('UserForm')}
            // />
          ),
        })}
      />
    </Navigator>
  )
}
