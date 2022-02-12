import React from 'react'

import { View, Text, Image } from 'src/components/base'

export const HomeScreen = () => (
  <View>
    <View bg="dark" pt={40}>
      <Image uri="https://github.com/jardelbordignon.png" wh={180} rounded />
    </View>
    <View bg="light" row h={60}>
      <View bg="dark" />
      <View bg="dark" bbrr={60} />
    </View>
    <View bg="dark" row h={60}>
      <View bg="light" btlr={60} />
      <View bg="light" />
    </View>
    <View bg="light" pb={40}>
      <Text>Second View</Text>
    </View>
  </View>
)
