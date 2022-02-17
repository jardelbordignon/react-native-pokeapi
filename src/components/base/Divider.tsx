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
  const orientation = props.orientation || 'horizontal'

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View
        style={{
          width: orientation === 'horizontal' ? '90%' : props.size || 0,
          height: orientation === 'vertical' ? '90%' : props.size || 0,
          backgroundColor: theme.colors[props.color || 'gray.100'],
          marginHorizontal: props.mh || 'auto',
          marginVertical: props.mv || 'auto',
        }}
      />
    </View>
  )
}
