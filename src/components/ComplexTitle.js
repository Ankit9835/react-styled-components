import React from 'react'
import styled from 'styled-components'
import { colors, setUpBorder } from '../utils'


const ComplexTitle = ({title}) => {
  return (
    <Wrapper>
        <h1 className='text'>{title}</h1>
        <div className='underline'></div>
        <div className='box'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    h1{
        text-transform:capitalize;
        text-align:center;
        color:yellow;
    }
    .underline{
        width:5rem;
        height:0.25rem;
        background: ${colors.primary};
        margin:0 auto;
    }
    .text{
        color:red
    }
    .box{
        height:10px;
        border:${setUpBorder({width:5,type:'solid',color:'red'})}
    }
`

export default ComplexTitle
