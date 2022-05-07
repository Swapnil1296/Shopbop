import axios from "axios";
import {useState, useEffect} from "react";
import "./WhatsNew.css";

export const WhatsNew = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/product").then(({data}) => {
      console.log(data);
      setProducts(data);
    });
  }, []);
  return (
    <div className="main-div-products">
      <div className="page-title-div">
        <p className="page-title">What's New</p>
      </div>

      <div className="content-div-one">
        {/* products options start */}
        <div className="subdiv-one">
          <a href="" target="blank">
            shop all
          </a>
          <a href="" target="blank">
            new today
          </a>
          <a href="" target="blank">
            clothing
          </a>
          <a href="" target="blank">
            shoes
          </a>
          <a href="" target="blank">
            bags
          </a>
          <a href="" target="blank">
            jwellery & accessories
          </a>
          <a href="" target="blank">
            designer boutique
          </a>
          <a href="" target="blank">
            men
          </a>
        </div>
        <div className="subdiv-two">
          <img
            src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/desktop/mastheads/2022/2022_05/sb_20220506_desktop_WNMH_mother_1-2.jpg"
            alt="image"
            className="head-image"
          />
          {/* filter div */}
          <div className="filter-div">
            <div className="filter-div-one">
              <p className="filter-div-ptag-one">FILTERS</p>
              <select name="" id="" className="filter-options">
                <option value="">DESIGNERS</option>
              </select>
              <select name="" id="" className="filter-options">
                <option value="">SIZES</option>
              </select>
              <select name="" id="" className="filter-options">
                <option value="">COLORS</option>
              </select>
              <p className="filter-div-ptag-two">CLEAR ALL</p>
            </div>
            <div className="filter-div-two">
              <p>SORT BY</p>
              <select name="" id="" className="filter-div-two-slecttage">
                <option value="">newest</option>
                <option value="">price:low to high</option>
                <option value="">price: high to low</option>
                <option value="">my wishcart</option>
                <option value="">editor's picks</option>
                <option value="">designers exclusives</option>
                <option valu e="">
                  rating: high to low
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {products.map((e) => (
        <div>{e.id}</div>
      ))}
    </div>
  );
};
