import styled from 'styled-components/native'

import theme from 'src/styles/theme.json'
import { ColorTypes } from '.'

interface IContainer {
  flex?: number
  bg?: ColorTypes
  row?: boolean
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'baseline' | 'center'
  p?: string | number
  py?: number
  px?: number
  m?: string | number
  my?: number
  mx?: number
  w?: string
  h?: string
}

export const Container = styled.SafeAreaView<IContainer>`
  flex: ${props => props.flex || 1};
  background-color: ${props =>
    props.bg ? theme.colors[props.bg] : 'transparent'};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
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
  width: 100%;
  height: auto;
  max-width: ${props => props.w || '100%'};
  max-height: ${props => props.h || 'auto'};
`
