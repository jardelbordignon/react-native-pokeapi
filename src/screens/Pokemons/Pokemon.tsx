import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SvgUri } from 'react-native-svg'

import { Button, Divider, Text, View } from 'src/components/base'
import { IPokemonItem } from 'src/interfaces/pokemon'

export const Pokemon = ({ id, name, avatar_uri }: IPokemonItem) => {
  const { navigate } = useNavigation()

  return (
    <Button
      onPress={() => navigate('PokemonDetails' as never, { id } as never)}
    >
      <View dir="row" p={20} bc="gray.100" br={20} mb={10}>
        <SvgUri uri={avatar_uri} width="100" height="100" />
        <Divider mh={10} />
        <Text to="capitalize" font="Pokemon" size={24}>
          {name}
        </Text>
      </View>
    </Button>
  )
}
