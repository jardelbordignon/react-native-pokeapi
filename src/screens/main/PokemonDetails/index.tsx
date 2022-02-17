import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SvgUri } from 'react-native-svg'

import { IPokemon } from 'src/interfaces/pokemon'
import { pokemonService } from 'src/services/pokemon'
import { View, Text } from 'src/components/base'

interface IParams {
  id: number
}

export const PokemonDetailsScreen = () => {
  const [pokemon, setPokemon] = useState<IPokemon>()
  const { height: windowHeight } = Dimensions.get('window')

  const { navigate } = useNavigation()
  const route = useRoute()

  const { id } = route.params as IParams
  const avatar_uri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

  useEffect(() => {
    async function loadPokemon(): Promise<void> {
      const pokemon = await pokemonService.findOne(id)
      setPokemon(pokemon)
    }

    loadPokemon()
  }, [id])

  if (!pokemon)
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    )

  const { name, abilities, base_experience, height, weight } = pokemon

  return (
    <View position="relative">
      <View position="absolute" bottom={windowHeight / 2 - 20} zIndex={1}>
        <Text to="capitalize" font="Pokemon" color="warning" size={32}>
          {name}
        </Text>
        <SvgUri uri={avatar_uri} height={windowHeight / 3} />
      </View>
      <View position="absolute" top={windowHeight / 2} zIndex={1} ph={20}>
        <Text>Altura: {height}</Text>
        <Text>Peso: {weight}</Text>
        <Text>Experiência: {base_experience}</Text>
        <Text>
          Habilidades: {abilities.map(a => a.ability.name).join(', ')}
        </Text>
      </View>

      <View bg="dark" justify="flex-end" />
      <View dir="column" bg="light" h={100}>
        <View bg="dark" bbrr={100} />
      </View>
      <View bg="dark" h={100}>
        <View bg="light" btlr={100} />
      </View>
      <View bg="light" justify="flex-start" />
    </View>
  )
}
