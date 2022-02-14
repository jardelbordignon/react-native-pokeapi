import React from 'react'
import { View } from 'react-native'

import { ColorTypes } from '.'
import theme from 'src/styles/theme.json'

interface IDivider {
  orientation?: 'vertical' | 'horizontal'
  mh?: number
  mv?: number
  size?: number
  color?: ColorTypes
}

export const Divider = (props: IDivider) => {
  const orientation = props.orientation || 'vertical'

  return (
    <View
      style={{
        width: orientation === 'horizontal' ? '90%' : props.size || 0,
        height: orientation === 'vertical' ? '90%' : props.size || 0,
        backgroundColor: theme.colors[props.color || 'gray.100'],
        marginHorizontal: props.mh || 0,
        marginVertical: props.mv || 0,
      }}
    />
  )
}
