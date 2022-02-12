import React from 'react'
import 'react-native-gesture-handler'
import { View, StatusBar } from 'react-native'

import { Routes } from './routes'

export const App = () => (
  <View style={{ flex: 1 }}>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Routes />
  </View>
)
