import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { View, Text, Image, Button } from 'src/components/base'

export const HomeScreen = () => {
  const { navigate } = useNavigation()

  const handleNavigate = async (): Promise<void> => {
    navigate('MainBottom', { screen: 'Dashboard' })
  }

  return (
    <View>
      <View bg="dark" pt={40}>
        <Image uri="https://github.com/jardelbordignon.png" wh={180} rounded />
        <Button onPress={() => handleNavigate()}>
          <Text>Entrar</Text>
        </Button>
      </View>
      <View bg="light" h={60}>
        <View bg="dark" bbrr={60} />
      </View>
      <View bg="dark" h={60}>
        <View bg="light" btlr={60} />
      </View>
      <View bg="light" pb={40}>
        <Text>Second View</Text>
      </View>
    </View>
  )
}
