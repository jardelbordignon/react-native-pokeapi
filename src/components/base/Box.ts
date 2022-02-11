import styled from 'styled-components/native'

import theme from 'src/styles/theme.json'
import { ColorTypes } from '.'

interface IBox {
  flex?: number
  bg?: ColorTypes
  row?: boolean
  gap?: string | number
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
  w?: string | number
  h?: string | number
  position?: 'absolute' | 'relative'
  top?: number
  bottom?: number
  left?: number
  right?: number
  zIndex?: number
}

export const Box = styled.View<IBox>`
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
  height: 100%;
  max-width: ${props =>
    props.w
      ? typeof props.w === 'number'
        ? `${props.w}px`
        : props.w
      : '100%'};
  max-height: ${props =>
    props.h
      ? typeof props.h === 'number'
        ? `${props.h}px`
        : props.h
      : '100%'};
  z-index: ${props => props.zIndex || 0};
`

/* {
    props.position && position: ${props => props.position};
    props.top && top: ${props => `${props.top}px`};
    props.bottom && bottom: ${props => `${props.bottom}px`};
    props.left && left: ${props => `${props.left}px`};
    props.right && right: ${props => `${props.right}px`};
  } */
