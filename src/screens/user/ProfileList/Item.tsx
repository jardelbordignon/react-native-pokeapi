import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Button, Image, Text, View } from 'src/components/base'
import { IUser } from 'src/interfaces/user'

export const Item = ({ id, name, email, avatarUrl }: IUser) => {
  const { navigate } = useNavigation()

  return (
    <Button onPress={() => navigate('Profile' as never, { id } as never)}>
      <View dir="row" bc="gray.200" br={20} pv={10} ph={20} mt={10}>
        <Image src={avatarUrl} w={80} rounded />
        <View align="flex-start" ml={15}>
          <Text font="semi-bold" size={24}>
            {name}
          </Text>
          <Text>{email}</Text>
        </View>
      </View>
    </Button>
  )
}
