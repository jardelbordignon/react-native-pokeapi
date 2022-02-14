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

// const handlePadding = (props: IText): string =>
//   props.p
//     ? typeof props.p === 'number'
//       ? `${props.p}px`
//       : props.p
//     : props.py
//     ? `${props.py}px 0`
//     : props.px
//     ? `0 ${props.px}px`
//     : '0px'

// export const Text = styled.Text<IText>`
//   font-family: ${props =>
//     props.font ? `Poppins-${props.font}` : 'Poppins-regular'};
//   font-size: ${props => props.size || 24}px;
//   line-height: ${props => props.lineH || 30}px;
//   color: ${props => theme.colors[props.color || 'dark']};
//   background-color: ${props =>
//     props.bg ? theme.colors[props.bg] : 'transparent'};
//   padding-top: ${props => handlePadding(props)}
//   padding: ${props =>
//     props.p
//       ? typeof props.p === 'number'
//         ? `${props.p}px`
//         : props.p
//       : props.py
//       ? `${props.py}px 0`
//       : props.px
//       ? `0 ${props.px}px`
//       : 0};
//   margin: ${props =>
//     props.m
//       ? typeof props.m === 'number'
//         ? `${props.m}px`
//         : props.m
//       : props.my
//       ? `${props.my}px 0`
//       : props.mx
//       ? `0 ${props.mx}px`
//       : 0};
//   border-radius: 5px;
// `
