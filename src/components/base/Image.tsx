import React from 'react'
import { Image as RNImage, ImageSourcePropType } from 'react-native'

interface IImage {
  source: ImageSourcePropType | string
  rounded?: boolean
  wh?: number
  w?: number
  h?: number
  br?: number
  btr?: number
  brr?: number
  bbr?: number
  blr?: number
  btlr?: number
  btrr?: number
  bbrr?: number
  bblr?: number
}

export const Image = (props: IImage) => {
  const round = props.rounded ? 100 : 0

  const source =
    typeof props.source === 'string' ? { uri: props.source } : props.source

  return (
    <RNImage
      source={source}
      style={{
        width: '100%',
        height: '100%',
        maxHeight: props.wh || props.h,
        maxWidth: props.wh || props.w,

        borderTopLeftRadius:
          props.btlr || props.btr || props.blr || props.br || round,
        borderTopRightRadius:
          props.btrr || props.btr || props.brr || props.br || round,
        borderBottomLeftRadius:
          props.bblr || props.bbr || props.blr || props.br || round,
        borderBottomRightRadius:
          props.bbrr || props.bbr || props.brr || props.br || round,
      }}
    />
  )
}
