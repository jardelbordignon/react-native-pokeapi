import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'

interface IButton {
  children: ReactNode
  onPress: () => void
}

export const Button = (props: IButton) => (
  <TouchableOpacity onPress={() => props.onPress()}>
    {props.children}
  </TouchableOpacity>
)
