import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { userService } from 'src/services/user'
import { IUser } from 'src/interfaces/user'
import { IPokemon } from 'src/interfaces/pokemon'

import { favoriteService } from 'src/services/favorite'

import { Button, Divider, Image, Text, View } from 'src/components/base'

interface IParams {
  id: number
}

export const Profile = () => {
  const [user, setUser] = useState<IUser>()
  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  const { navigate } = useNavigation()

  const route = useRoute()
  const { id } = route.params as IParams

  const loadFavoritePokemons = async () => {
    const pokemons = await favoriteService.findAllByUserId(id)

    console.log(JSON.stringify(pokemons, null, 2))

    setPokemons(pokemons)
  }

  const loadUsers = async () => {
    const user = await userService.findOne(id)

    if (!user) return

    setUser(user)
    loadFavoritePokemons()
  }

  useEffect(() => {
    loadUsers()
  }, [])

  if (!user) return null

  const { name, email, avatarUrl } = user

  return (
    <ScrollView
      style={{
        paddingHorizontal: 10,
        marginBottom: 20,
      }}
    >
      <View dir="row" bc="gray.200" br={20} pv={10} ph={20} mt={10}>
        <Image src={avatarUrl} w={80} rounded />
        <View align="flex-start" ml={15}>
          <Text font="semi-bold" size={24}>
            {name}
          </Text>
          <Text>{email}</Text>
        </View>
      </View>

      <Divider color="gray.200" orientation="horizontal" mv={20} size={1} />

      <Text font="Pokemon" size={24}>
        Favoritos
      </Text>

      {pokemons &&
        pokemons.map(pokemon => (
          <Button
            key={pokemon.id}
            onPress={() =>
              navigate('PokemonDetails' as never, { id: pokemon.id } as never)
            }
          >
            <View
              dir="row"
              justify="space-evenly"
              bc="gray.200"
              br={20}
              pv={10}
              ph={20}
              mt={10}
            >
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                w={80}
              />
              <Text to="capitalize" font="Pokemon" size={24}>
                {pokemon.name}
              </Text>
            </View>
          </Button>
        ))}
    </ScrollView>
  )
}
