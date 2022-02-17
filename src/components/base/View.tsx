import React, { ReactNode } from 'react'
import { View as RNView, FlexStyle } from 'react-native'

import theme from 'src/styles/theme.json'
import { AlignTypes, ColorTypes, JustifyTypes } from '.'

interface IView {
  flex?: FlexStyle['flex']
  dir?: FlexStyle['flexDirection']
  basis?: FlexStyle['flexBasis']
  grow?: FlexStyle['flexGrow']
  shrink?: FlexStyle['flexShrink']
  wrap?: FlexStyle['flexWrap']
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
  const {
    flex = 1,
    dir,
    basis,
    grow,
    shrink,
    wrap,
    bg,
    justify = 'center',
    align = 'center',
    p,
    pt,
    pr,
    pb,
    pl,
    py,
    pv,
    px,
    ph,
    m,
    mt,
    mr,
    mb,
    ml,
    my,
    mv,
    mx,
    mh,
    w = '100%',
    maxW,
    minW,
    h = 'auto',
    maxH,
    minH,
    bc,
    bw,
    br,
    btr,
    brr,
    bbr,
    blr,
    btlr,
    btrr,
    bbrr,
    bblr,
    position,
    top,
    bottom,
    left,
    right,
    zIndex = 0,
    children,
  } = props

  return (
    <RNView
      style={{
        flex,
        flexDirection: dir,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: align,

        backgroundColor: bg ? theme.colors[bg] : undefined,

        width: w,
        minWidth: minW,
        maxWidth: maxW,
        height: h,
        minHeight: minH,
        maxHeight: maxH,

        padding: p,
        paddingVertical: pv || py,
        paddingHorizontal: ph || px,
        paddingTop: pt,
        paddingRight: pr,
        paddingBottom: pb,
        paddingLeft: pl,

        margin: m,
        marginVertical: mv || my,
        marginHorizontal: mh || mx,
        marginTop: mt,
        marginRight: mr,
        marginBottom: mb,
        marginLeft: ml,

        borderColor: bc ? theme.colors[bc] : undefined,
        borderWidth: bw || bc ? 1 : 0,

        borderTopLeftRadius: btlr || btr || blr || br || 0,
        borderTopRightRadius: btrr || btr || brr || br || 0,
        borderBottomLeftRadius: bblr || bbr || blr || br || 0,
        borderBottomRightRadius: bbrr || bbr || brr || br || 0,

        position,
        top,
        bottom,
        left,
        right,

        zIndex,
      }}
    >
      {children}
    </RNView>
  )
}
