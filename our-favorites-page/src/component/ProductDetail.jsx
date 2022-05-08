import {useEffect, useState} from "react";
import '../componentCSS/productdetails.css'
import {useParams} from "react-router-dom";

import axios from "axios";

export const Userdetail = () => {
  const {id} = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5001/product/${id}`).then(({data}) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="main-product-div">
      <div className="subdiv-product-one">
        <img src={users.image_1} alt="" />
      </div>
      <div className="subdiv-product-two">
        <p className="subdiv-product-ptag-one">{users.title}</p>
        <p className="subdiv-product-ptag-two">{users.company}</p>
        <p className="subdiv-product-ptag-three">{users.price}</p>
        <div className="color-div">
          <p>Color: Scarlet Begonia</p>
          <img
            src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rhode/rhode303481d3d3/rhode303481d3d3_1651763098033_2-0.jpg"
            alt=""
          />
        </div>
        <div className="sizes-div">
          <div>
            <p>00</p>
          </div>
          <div>
            <p>0</p>
          </div>
          <div>
            <p>00</p>
          </div>
          <div>
            <p>2</p>
          </div>
          <div>
            <p>4</p>
          </div>
          <div>
            <p>6</p>
          </div>
          <div>
            <p>8</p>
          </div>
          <div>
            <p>10</p>
          </div>
          <div>
            <p>12</p>
          </div>
          <div>
            <p>14</p>
          </div>
        </div>
        <div className="size-description">
          Sizes listed are US sizes. See Size Conversions Designed for an A-line
          cut in a mini length.
        </div>
        <div className="add-to-cart">
          <button>Add To Bag</button>
        </div>
        <div className="add-to-whishlist">
          <button>Add To Whish List</button>
        </div>
        <div className="bottom-tagline">
          <p>FREE express international delivery and EASY Returns</p>
        </div>
      </div>
      {/* 

      <p>First Name :{users.title} </p>

      <p>Last Name :{users.company} </p> */}
    </div>
  );
};
