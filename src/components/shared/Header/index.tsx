import React from 'react'

import { View, Image } from 'src/components/base'
import logo from 'src/assets/pokeapi.png'

export const Header = () => {
  return (
    <View dir="row" justify="space-evenly">
      <Image source={logo} w={140} />
    </View>
  )
}
