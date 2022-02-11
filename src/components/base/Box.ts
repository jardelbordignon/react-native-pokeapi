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
  p?: number
  pt?: number
  pr?: number
  pb?: number
  pl?: number
  py?: number
  px?: number
  m?: number
  mt?: number
  mr?: number
  mb?: number
  ml?: number
  my?: number
  mx?: number
  w?: string | number
  h?: string | number
  br?: number
  btr?: number
  brr?: number
  bbr?: number
  blr?: number
  btlr?: number
  btrr?: number
  bbrr?: number
  bblr?: number
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

  padding-top: ${props => `${props.pt || props.py || props.p || 0}px`};
  padding-right: ${props => `${props.pr || props.px || props.p || 0}px`};
  padding-bottom: ${props => `${props.pb || props.py || props.p || 0}px`};
  padding-left: ${props => `${props.pl || props.px || props.p || 0}px`};

  margin-top: ${props => `${props.mt || props.my || props.m || 0}px`};
  margin-right: ${props => `${props.mr || props.mx || props.m || 0}px`};
  margin-bottom: ${props => `${props.mb || props.my || props.m || 0}px`};
  margin-left: ${props => `${props.ml || props.mx || props.m || 0}px`};

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
  border-top-left-radius: ${props =>
    `${props.btlr || props.btr || props.blr || props.br || 0}px`};
  border-top-right-radius: ${props =>
    `${props.btrr || props.btr || props.brr || props.br || 0}px`};
  border-bottom-left-radius: ${props =>
    `${props.bblr || props.bbr || props.blr || props.br || 0}px`};
  border-bottom-right-radius: ${props =>
    `${props.bbrr || props.bbr || props.brr || props.br || 0}px`};

  top: ${props => (props.top ? `${props.top}px` : 'auto')};
  bottom: ${props => (props.bottom ? `${props.bottom}px` : 'auto')};
  left: ${props => (props.left ? `${props.left}px` : 'auto')};
  right: ${props => (props.right ? `${props.right}px` : 'auto')};

  z-index: ${props => props.zIndex || 0};
`
