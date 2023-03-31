import React from 'react'
import styled, {css} from 'styled-components/macro'

export const DefaultButton = styled.button.attrs((props) => {
  return {type: props.type || 'button'}
})`
  background: #645cff;
  color: #fff;
  border: none
  border-radius: 0.25rem;
  cursor:pointer;
  text-transform:capitalize;
  ${({large}) => large ? css`
    padding:1rem
    font-size:2.5rem
    font-weight:700
    ` : css`
      padding:0.5rem
      font-size:1rem
      font-weight:400
  `}
  padding:0.5rem;
  display:block;
  width:200px;
  margin:1rem auto; 
`

export const HipsterComponent = styled(DefaultButton)`
    width:400px;
    background:transparent;
    color:#645cff;
    border: 1px solid #645cff 
`

//export default DefaultButton
