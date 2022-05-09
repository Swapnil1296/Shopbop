import React from 'react'
import styled from 'styled-components'
import img1 from '../../onepart1.jpg';
import img2 from '../../onepart2.jpg';
const TwoUp = () => {
  return (
    <TwoUpWrapper>
        <OnePart>
            <img src={img1} alt="" />
            <div>
                <p>Party Perfect</p>
                <hr />
                <p>Your best-dressed event season yet. </p>
            </div>
        </OnePart>
        <OnePart>
        <img src={img2} alt="" />
            <div>
                <p>Mother's Day Edit</p>
                <hr />
                <p>Must-have gifts for every mom in your life.</p>
            </div>
        </OnePart>
    </TwoUpWrapper>
  )
}
const TwoUpWrapper=styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: rgb(255, 255, 255);
    -webkit-box-pack: center;
    justify-content: center;
    text-align: left;
    overflow-y: hidden;
    padding: 70px 0px 30px;
    flex-wrap: nowrap;
`
const OnePart=styled.div`
    padding: 0px 2.5%;
    width: 40%;
    max-width: 595px;
    cursor: pointer;
    background-color: inherit;
    text-decoration: none;
    div{
    position: relative;
    margin-top: -10%;
    left: 20%;
    width: 82%;
    padding: 8%;
    transition: margin-top 0.2s ease 0s, padding-bottom 0.2s ease 0s;
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    }
    p{
    font-weight: bold;
    font-style: normal;
    font-stretch: condensed;
    font-size: 12px;
    letter-spacing: 1.75px;
    color: rgb(0, 0, 0);
    text-transform: uppercase;
    margin: 0px;
    }
    hr{
    width: 15%;
    height: 2px;
    background-color: rgb(238, 74, 27);
    border: none;
    margin: 12px 0px;
    }
`

export default TwoUp