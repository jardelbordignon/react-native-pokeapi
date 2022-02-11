import styled from 'styled-components/native'

interface ISpacer {
  w?: string | number
  h?: string | number
}

export const Spacer = styled.View<ISpacer>`
  width: ${props =>
    props.w
      ? typeof props.w === 'number'
        ? `${props.w}px`
        : props.w
      : '15px'};
  height: ${props =>
    props.h
      ? typeof props.h === 'number'
        ? `${props.h}px`
        : props.h
      : '15px'};
`
