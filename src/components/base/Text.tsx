import React, { ReactNode } from 'react'
import { Text as RNText } from 'react-native'

import { ColorTypes } from '.'
import theme from 'src/styles/theme.json'

interface IText {
  font?:
    | 'Pokemon'
    | 'regular'
    | 'light'
    | 'medium'
    | 'semi-bold'
    | 'bold'
    | 'extra-bold'
  color?: ColorTypes
  size?: number
  lineH?: number
  to?: 'capitalize' | 'uppercase' | 'lowercase'
  children: ReactNode
}

export const Text = (props: IText) => (
  <RNText
    style={{
      fontFamily:
        props.font === 'Pokemon'
          ? 'Ketchum' // 'PocketMonk' 'PokemonSolid'
          : `Poppins-${props.font || 'medium'}`,
      fontSize: props.size || 22,
      lineHeight: props.lineH,
      color: theme.colors[props.color || 'secondary'],
      textTransform: props.to,
    }}
  >
    {props.children}
  </RNText>
)
