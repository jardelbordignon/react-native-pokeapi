import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { DashboardScreen } from 'src/screens/private/Dashboard'

const { Navigator, Screen } = createNativeStackNavigator()

export const PrivateRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={DashboardScreen} />
    </Navigator>
  )
}
