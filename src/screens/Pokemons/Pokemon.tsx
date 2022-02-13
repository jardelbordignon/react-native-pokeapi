import React from 'react'

import { View, Text } from 'src/components/base'

interface IPokemon {
  id: number
  name: string
}

export const Pokemon = ({ name }: IPokemon) => (
  <View h={60}>
    <Text>Pokemon {name}</Text>
  </View>
)
