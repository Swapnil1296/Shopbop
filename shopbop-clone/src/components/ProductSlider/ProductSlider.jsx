import React from 'react'
import { useState,useEffect } from 'react'
// import Slider from "react-slick";
import axios from "axios";

const ProductSlider = () => {
    const [list,setList]=useState([]);
    useEffect(() => {
        const get_list = async () => {
          try {
            const res = await axios.get("https://fakestoreapi.com/products");
            console.log(res.data);
            setList(res.data);
          } catch (err) {
            console.log("backend", err);
          }
        };
    
        get_list();
      }, []);

      console.log(list);
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 1
    //   };
  return (
    <div>
{/* <Slider {...settings}> */}
     {list.map((data)=>{
         return(
           <Card  item={data} />
     );} 
    )}
    
    {/* </Slider> */}
    </div>
  )
};

const Card = ({ item }) => {
    return (
      <div className='card'>
        <img src={item.image} width="100px" height="200px"/>
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
    );
  };
export default ProductSlider