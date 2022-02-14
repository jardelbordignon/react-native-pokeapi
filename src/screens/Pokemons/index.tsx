import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import { pokemonService } from 'src/services/pokemon'
import { Text, View } from 'src/components/base'
import { Pokemon } from './Pokemon'

import { IPokemonApiItem, IPokemonItem } from 'src/interfaces/pokemon'

export const PokemonsScreen = () => {
  const [pokemons, setPokemons] = useState<IPokemonItem[]>([])

  useEffect(() => {
    const loadPokemons = async (): Promise<void> => {
      const res = await pokemonService.findAll()

      const pokemons = res.results.map((pokemon: IPokemonApiItem) => {
        const id = pokemon.url.split('/')[6]
        return {
          ...pokemon,
          id,
          avatar_uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
        }
      })

      setPokemons(pokemons)
    }

    loadPokemons()
  }, [])

  return (
    <View>
      <View bg="light" p={8} align="flex-start" h={100}>
        <Text>Pokemons</Text>
      </View>
      <ScrollView
        style={{
          width: '100%',
          height: '70%',
          padding: 10,
        }}
      >
        {pokemons.map(pokemon => (
          <Pokemon {...pokemon} key={pokemon.id} />
        ))}
      </ScrollView>
    </View>
  )
}
