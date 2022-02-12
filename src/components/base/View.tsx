import React, { ReactNode } from 'react'
import { View as RNView } from 'react-native'

import theme from 'src/styles/theme.json'
import { ColorTypes } from '.'

interface IView {
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
  children?: ReactNode
}

export const View = (props: IView) => (
  <RNView
    style={{
      flex: props.flex || 1,
      backgroundColor: props.bg ? theme.colors[props.bg] : 'transparent',
      flexDirection: props.row ? 'row' : 'column',
      justifyContent: props.justify || 'center',
      alignItems: props.align || 'center',

      width: '100%',
      height: '100%',
      maxWidth: props.w || '100%',
      maxHeight: props.h || '100%',

      paddingTop: props.pt || props.py || props.p || 0,
      paddingRight: props.pr || props.px || props.p || 0,
      paddingBottom: props.pb || props.py || props.p || 0,
      paddingLeft: props.pl || props.px || props.p || 0,

      marginTop: props.mt || props.my || props.m || 0,
      marginRight: props.mr || props.mx || props.m || 0,
      marginBottom: props.mb || props.my || props.m || 0,
      marginLeft: props.ml || props.mx || props.m || 0,

      borderTopLeftRadius:
        props.btlr || props.btr || props.blr || props.br || 0,
      borderTopRightRadius:
        props.btrr || props.btr || props.brr || props.br || 0,
      borderBottomLeftRadius:
        props.bblr || props.bbr || props.blr || props.br || 0,
      borderBottomRightRadius:
        props.bbrr || props.bbr || props.brr || props.br || 0,

      position: props.position,
      top: props.top,
      bottom: props.bottom,
      left: props.left,
      right: props.right,

      zIndex: props.zIndex || 0,
    }}
  >
    {props.children}
  </RNView>
)
