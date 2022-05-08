import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import ProductSlider from '../ProductSlider/ProductSlider'
import Choice from '../Choice/Choice'
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
        <DescWrapper>
          <Title>
            <div className="h3" >SEE THE LATEST</div>
            <div className='h2'>WHAT'S NEW</div>
          </Title>
          <Productlink>
            Show all
          </Productlink>
        </DescWrapper>
        <ProductSlider/>
      </SliderWrapper>
      <ChoiceWrapper>
        <h2>GET SOME INSPIRATION</h2>
        <h1>What Are You Looking For?</h1>
        <Choice/>
      </ChoiceWrapper>
    </HomeWrapper>
  )
}

const HomeWrapper=styled.div`
  display:flex;
  flex-direction: column;
  margin:0;
  padding: 0;
  overflow: hidden;
  font-family: 'GTAmerica',"Helvetica Neue", Helvetica, sans-serif;
`
const Wrapperbanner=styled.div`
  width:100%;
  height: 50vh;
  border:1px solid transparent;
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
  box-sizing: border-box;
  width: 60%;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
`
const ChoiceWrapper=styled.div`
  background-color:rgba(255, 246, 251, 1);
  height: 70%;
  width: 100%;
  h2{
    margin-top: 20px;
    padding-top: 20px;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.3em;
  }
  h1{
    font-weight: 900;
    font-size: 32px;
    text-align: center;

  }
`
const DescWrapper=styled.div`
  width: 100%;
    padding: 30px 0px 14px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-end;
    font-family: GTAmerica, "Helvetica Neue", Helvetica, sans-serif;
`
const Title=styled.div`
    width: 60%;
    text-align: left;
  .h3{
    font-size: 16px;
    font-weight: 600;
  }
  .h2{
    font-size: 34px;
    font-weight: 900;
  }
`
const Productlink=styled.div`
    text-decoration: none;
    display: inline-block;
    padding-bottom: 2px;
    border-bottom: 1px solid transparent;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% 1px;
    background-image: linear-gradient(0deg, currentcolor, currentcolor);
    transition: border-color 0.3s ease 0s;
    margin: 0px;
    text-transform: none;
    color: rgb(238, 74, 27);
  
`

const Item=styled.div`
  
`
export default Home