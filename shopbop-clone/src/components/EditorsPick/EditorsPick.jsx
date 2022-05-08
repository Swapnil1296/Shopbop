import React from 'react'
import styled from 'styled-components'
import IMG from '../../picturevid.PNG'
const EditorsPick = () => {
  return (
    <Wrapper>
        <a href="">
            <img src={IMG} alt="" />
        </a>
    </Wrapper>
  )
}

const Wrapper=styled.div`
    box-sizing: border-box;
    pointer-events: none;
    width: 100% !important;
    margin: 0px auto !important;
    img{
        height:100%;
        width:100%;
        object-fit: contain;
    }
`
export default EditorsPick