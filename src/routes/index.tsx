import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Image } from 'react-native'

import { Box } from 'src/components/base'
import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'

import logo from 'src/assets/img/pokeapi_256.png'

export const Routes = () => {
  const loading = false
  const user = undefined

  if (loading)
    return (
      <Box bg="secondary">
        <Image source={logo} />
      </Box>
    )

  return (
    <NavigationContainer>
      {user ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  )
}
