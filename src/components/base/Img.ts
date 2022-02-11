import styled from 'styled-components/native'

interface IImg {
  avatar?: boolean
  size?: number
  w?: number
  h?: number
}

export const Img = styled.Image<IImg>`
  width: 100%;
  height: 100%;
  {
    props.size || props.w &&
    max-width: ${props => props.size || props.w}px
  }
  max-width: ${props => props.size || props.w || 100}px
  max-height: ${props => props.size || props.h || 100}px
  border-radius: ${props => props.size || 72}px;
`
