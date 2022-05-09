import React from 'react'
import Slider from 'react-slick'
import './ProductSlider.css'
import { Link } from 'react-router-dom'

const ProductSlider = () => {
  const ItemCards = [
    {
      imageSrc:'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rhode/rhode303481d3d3/rhode303481d3d3_1651763099878_2-0._QL90_UX346_.jpg',
      title: 'Rhode',
      description: 'Madeline Dress',
      pricingText: '$435.00',
    },
    {
      imageSrc:'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/staud/staud3114818125/staud3114818125_1651767576287_2-0._QL90_UX346_.jpg',
      title: 'STAUD',
      description: 'Chlara Espadrille Heels',
      pricingText: '$375.00',
    },
    {
      imageSrc:'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/jondb/jondb30917197d5/jondb30917197d5_1651763182959_2-0._QL90_UX346_.jpg',
      title: 'Jonathan Slmkhal',
      description: 'Quince Jacquard',
      pricingText: '$345.00',
    },
    {
      imageSrc:'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/lgenc/lgenc3150974931/lgenc3150974931_1651763081078_2-0._QL90_UX346_.jpg',
      title: 'LAGENCE',
      description: 'Wanda Corps. Ltd',
      pricingText: '$299.00',
    },
    {
      imageSrc:'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/yvonk/yvonk3001511377/yvonk3001511377_1651770460472_2-0._QL90_UX346_.jpg',
      title: 'Yvonne Konne',
      description: 'Flip bag',
      pricingText: '$390.00',
    }
  ]

  const sliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
  }

  return (
    <div className='content'>
      <Slider {...sliderSettings}>
        {ItemCards.map((card, index) => (
          <div key={index}>
            <Link to="/what'snew">
            <div className="card">
              <img alt={card.title} src={card.imageSrc}  className='card-img' />
              <h2 className="card-title">{card.title}</h2>
              <p className='card-desc'>{card.description}</p>
              <p className='price'>{card.pricingText}</p>
            </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}


export default ProductSlider