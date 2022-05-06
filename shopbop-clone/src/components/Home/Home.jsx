import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <HomeWrapper>
    <Wrapperbanner>
      <Textwrapper>
        <h3> Sun-ready Bags</h3>
        <p>Warmer days call for<br/> handspun-chic style &#40;go <br/> ahead,get carried away&#41;</p>
        <button>Shop now</button>
      </Textwrapper>
     
    </Wrapperbanner>
    <SliderWrapper>

    </SliderWrapper>
    <ChoiceWrapper>

    </ChoiceWrapper>
    <Footer/>
    </HomeWrapper>
  )
}

const HomeWrapper=styled.div`
  display:flex;
  flex-direction: column;
`
const Wrapperbanner=styled.div`
  width:100%;
  height: 50vh;
  border:1px solid transparent;
  font-family: 'GTAmerica',"Helvetica Neue", Helvetica, sans-serif;
  position: relative;
  background-image: url("https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220505_desktop_P1_handbags._FMwebp_UX1500_.jpg 1x, https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220505_desktop_P1_handbags._FMwebp_.jpg");
  overflow: hidden;
  
`

const Textwrapper=styled.div`
margin-left:30px;
margin-top: 80px;
  h3{
    color: rgb(0, 0, 0);
    padding-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
  }
  p{
    margin-top: 0px;
  }
  button{
    background-color: rgb(238, 74, 27);
    font-weight: normal;
    border: none;
    padding: 18px 40px;
    color: rgb(255, 255, 255) !important;
  }
`

const SliderWrapper=styled.div`
  
`
const ChoiceWrapper=styled.div`
  
`
export default Home