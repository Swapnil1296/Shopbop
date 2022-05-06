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
                          
            </div>
            <div className="filter-div-two"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
