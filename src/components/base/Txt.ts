import styled from 'styled-components/native'

import theme from 'src/styles/theme.json'
import { ColorTypes } from '.'

interface ITxt {
  font?: 'regular' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold'
  color?: ColorTypes
  size?: number
  lineH?: number
}

export const Txt = styled.Text<ITxt>`
  font-family: ${props =>
    props.font ? `Poppins-${props.font}` : 'Poppins-regular'};
  font-size: ${props => props.size || 24}px;
  line-height: ${props => props.lineH || 22}px;
  color: ${props => theme.colors[props.color || 'dark']};
`
