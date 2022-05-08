import React from 'react'
import styled from 'styled-components'
const Choice = () => {
    
        
  return (
    <Wrapper>
        <CardWrapper>
            <Card>
                <img src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_vacation._QL90_UX452_.jpg" alt="" />
                <a href="">Vacation Wardrobe</a>
            </Card>
            <Card>
                <img src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_dressshop._QL90_UX452_.jpg" alt="" />
                <a href="">The Dress Shop</a>
            </Card>
            <Card>
                <img src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_bestdressed._QL90_UX452_.jpg" alt="" />
                <a href="">Best-Dressed Guest</a>
            </Card>
            <Card>
                <img src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_daytime._QL90_UX452_.jpg" alt="" />
                <a href="">Daytime Drama</a>
            </Card>
            <Card>
                <img src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_9to5._QL90_UX452_.jpg" alt="" />
                <a href="">New 9-To-5</a>
            </Card>
        </CardWrapper>
    </Wrapper>
  )
}

const Wrapper=styled.div`
    border: 1px;
`
const Card=styled.div`
   width :25% ;
   height:30%;
   margin:5px 5px;
   text-align: center;
   img{
       height: 100%;
       width:100%;
       object-fit: cover;
   }
   a{
    
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
   }
`
const CardWrapper=styled.div`
display: flex;
flex-basis: 20%;
    
`
export default Choice