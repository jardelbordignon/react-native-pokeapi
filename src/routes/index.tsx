import React from 'react'
import { Image } from 'react-native'

import { Box } from 'src/components/base'
import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'

import pokeapi_logo from 'src/assets/img/pokeapi_256.png'

export const Routes = () => {
  const loading = false
  const user = undefined

  if (loading)
    return (
      <Box bg="secondary">
        <Image source={pokeapi_logo} />
      </Box>
    )

  return user ? <PrivateRoutes /> : <PublicRoutes />
}
