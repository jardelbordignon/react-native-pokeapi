import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'

import { Button, Text, View } from 'src/components/base'
import { IPokemonItem } from 'src/interfaces/pokemon'

export const ITEM_HEIGHT = 300

export const Pokemon = (data: IPokemonItem) => {
  // const { id, name, imageUri, thumbUri, isVisible } = data
  const { id, name, imageUri } = data
  const { navigate } = useNavigation()

  return (
    <Button
      onPress={() => navigate('PokemonDetails' as never, { id } as never)}
    >
      <View bc="gray.200" br={20} pb={20} h={ITEM_HEIGHT} mt={10}>
        <Image
          source={{ uri: imageUri }}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          // srcMini={thumbUri}
          // shouldLoad={isVisible}
          // h="100%"
        />
        <Text to="capitalize" font="Pokemon" size={24}>
          {name}
        </Text>
      </View>
    </Button>
  )
}
