import React, { useState, useEffect, useCallback } from 'react'
import { FlatList, View } from 'react-native'

import { userService } from 'src/services/user'
import { IUser } from 'src/interfaces/user'
import { Item } from './Item'
import { useNavigation } from '@react-navigation/native'
import { Button, Text } from 'src/components/base'

export const ProfileList = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const { navigate } = useNavigation()

  useEffect(() => {
    const loadUsers = async () => {
      const users = await userService.findAll()

      setUsers(users)
    }

    loadUsers()
  }, [])

  const keyExtractor = (item: IUser) => item.email

  const renderItem = useCallback(({ item }) => <Item {...item} />, [])

  return (
    <View>
      <View style={{ paddingLeft: 20, paddingVertical: 20 }}>
        <Button onPress={() => navigate('Main' as never)}>
          <Text font="Pokemon" size={32}>
            Ver Pokemons
          </Text>
        </Button>
      </View>
      <FlatList
        keyExtractor={keyExtractor}
        data={users}
        renderItem={renderItem}
        style={{}}
      />
    </View>
  )
}
