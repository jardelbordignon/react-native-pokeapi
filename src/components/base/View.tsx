import React, { ReactNode } from 'react'
import { View as RNView } from 'react-native'

import theme from 'src/styles/theme.json'
import { AlignTypes, ColorTypes, JustifyTypes } from '.'

interface IView {
  flex?: number
  dir?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  basis?: number
  grow?: number
  shrink?: number
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  bg?: ColorTypes
  justify?: JustifyTypes
  align?: AlignTypes
  p?: number
  pt?: number
  pr?: number
  pb?: number
  pl?: number
  py?: number
  pv?: number
  px?: number
  ph?: number
  m?: number
  mt?: number
  mr?: number
  mb?: number
  ml?: number
  my?: number
  mv?: number
  mx?: number
  mh?: number
  w?: string | number
  maxW?: string | number
  minW?: string | number
  h?: string | number
  maxH?: string | number
  minH?: string | number
  bc?: ColorTypes
  bw?: number
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

export const View = (props: IView) => {
  // TODO: implementar gap. https://eddrichjanzzen.github.io/blog/2021/07/31/spacebetween-react-native-styling.html
  const children = props.children

  return (
    <RNView
      style={{
        flex: props.flex || 1,
        flexDirection: props.dir,
        flexBasis: props.basis,
        flexGrow: props.grow,
        flexShrink: props.shrink,
        flexWrap: props.wrap,
        justifyContent: props.justify || 'center',
        alignItems: props.align || 'center',

        backgroundColor: props.bg ? theme.colors[props.bg] : undefined,

        width: props.w || '100%',
        minWidth: props.minW,
        maxWidth: props.maxW,
        height: props.h || 'auto',
        minHeight: props.minH,
        maxHeight: props.maxH,

        padding: props.p,
        paddingVertical: props.pv || props.py,
        paddingHorizontal: props.ph || props.px,
        paddingTop: props.pt,
        paddingRight: props.pr,
        paddingBottom: props.pb,
        paddingLeft: props.pl,

        margin: props.m,
        marginVertical: props.mv || props.my,
        marginHorizontal: props.mh || props.mx,
        marginTop: props.mt,
        marginRight: props.mr,
        marginBottom: props.mb,
        marginLeft: props.ml,

        borderColor: props.bc ? theme.colors[props.bc] : undefined,
        borderWidth: props.bw || props.bc ? 1 : 0,

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
      {children}
    </RNView>
  )
}
