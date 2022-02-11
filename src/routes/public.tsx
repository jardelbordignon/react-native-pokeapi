import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { HomeScreen } from 'src/screens/public/Home'

export const PublicRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  )
}
