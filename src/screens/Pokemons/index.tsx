import React from 'react'

import { View, Text } from 'src/components/base'
import { Pokemon } from './Pokemon'

const data = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
]

export const PokemonsScreen = () => {
  return (
    <View>
      <Text>Lista de Pokemons</Text>

      {data.map(pokemon => (
        <Pokemon {...pokemon} key={pokemon.id} />
      ))}
    </View>
  )
}
