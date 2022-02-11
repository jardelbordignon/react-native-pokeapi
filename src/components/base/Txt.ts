import styled from 'styled-components/native'

import theme from 'src/styles/theme.json'
import { ColorTypes } from '.'

interface ITxt {
  font?: 'regular' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold'
  color?: ColorTypes
  bg?: ColorTypes
  size?: number
  lineH?: number
  p?: string | number
  py?: number
  px?: number
  m?: string | number
  my?: number
  mx?: number
}

const handlePadding = (props: ITxt): string =>
  props.p
    ? typeof props.p === 'number'
      ? `${props.p}px`
      : props.p
    : props.py
    ? `${props.py}px 0`
    : props.px
    ? `0 ${props.px}px`
    : '0px'

export const Txt = styled.Text<ITxt>`
  font-family: ${props =>
    props.font ? `Poppins-${props.font}` : 'Poppins-regular'};
  font-size: ${props => props.size || 24}px;
  line-height: ${props => props.lineH || 30}px;
  color: ${props => theme.colors[props.color || 'dark']};
  background-color: ${props =>
    props.bg ? theme.colors[props.bg] : 'transparent'};
  padding-top: ${props => handlePadding(props)}
  padding: ${props =>
    props.p
      ? typeof props.p === 'number'
        ? `${props.p}px`
        : props.p
      : props.py
      ? `${props.py}px 0`
      : props.px
      ? `0 ${props.px}px`
      : 0};
  margin: ${props =>
    props.m
      ? typeof props.m === 'number'
        ? `${props.m}px`
        : props.m
      : props.my
      ? `${props.my}px 0`
      : props.mx
      ? `0 ${props.mx}px`
      : 0};
  border-radius: 5px;
`
