import React, { useState, useEffect } from 'react'
import {
  Animated,
  ImageBackground,
  Image as RNImage,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native'

interface IImage {
  src: ImageSourcePropType | string
  shouldLoad?: boolean
  srcMini?: ImageSourcePropType | string
  resizeMode?: ImageResizeMode
  ratio?: number
  rounded?: boolean
  wh?: number | string
  w?: number | string
  maxW?: number | string
  minW?: number | string
  h?: number | string
  maxH?: number | string
  minH?: number | string
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
  const {
    src,
    shouldLoad = false,
    srcMini,
    resizeMode,
    ratio = 1,
    rounded,
    wh,
    w,
    maxW,
    minW,
    h,
    maxH,
    minH,
    br,
    btr,
    brr,
    bbr,
    blr,
    btlr,
    btrr,
    bbrr,
    bblr,
  } = props
  const round = rounded ? 100 : 0

  const style: StyleProp<ImageStyle> = {
    width: w || wh,
    maxWidth: maxW,
    minWidth: minW,

    height: h || wh,
    maxHeight: maxH,
    minHeight: minH,

    aspectRatio: ratio,
    resizeMode,

    borderTopLeftRadius: btlr || btr || blr || br || round,
    borderTopRightRadius: btrr || btr || brr || br || round,
    borderBottomLeftRadius: bblr || bbr || blr || br || round,
    borderBottomRightRadius: bbrr || bbr || brr || br || round,
  }

  const source = typeof src === 'string' ? { uri: src } : src

  const sourceMini = srcMini
    ? typeof srcMini === 'string'
      ? { uri: srcMini }
      : srcMini
    : null

  const AnimatedImage = Animated.createAnimatedComponent(RNImage)
  const opacity = new Animated.Value(0)

  const onLoadEnd = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }

  const [loaded, setLoaded] = useState(false)

  if (sourceMini) {
    useEffect(() => {
      if (shouldLoad) setLoaded(true)
    }, [shouldLoad])
  }

  return sourceMini ? (
    <ImageBackground source={sourceMini} style={style} blurRadius={2}>
      {loaded && (
        <AnimatedImage
          source={source}
          style={{ ...style, opacity }}
          onLoadEnd={onLoadEnd}
        />
      )}
    </ImageBackground>
  ) : (
    <AnimatedImage
      source={source}
      style={{ ...style, opacity }}
      onLoadEnd={onLoadEnd}
    />
  )
}
