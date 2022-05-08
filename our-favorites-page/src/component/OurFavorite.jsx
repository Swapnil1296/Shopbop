
import {useState, useEffect} from "react";
import "../componentCSS/OurFavorite.css";
import Post from "./OurFavPosts";
import Pagination from "./OurFavPagination";
const url = "http://localhost:5001/product";
export const WhatsNew = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div className="main-div-products">
      <div className="page-title-div">
        <p className="page-title">OUR FAVORITES</p>
      </div>

      <div className="content-div-one">
        {/* products options start */}
        <div className="subdiv-one">
          <a href="" target="blank">
            AAPI Designers & AAPI-Owned Brands
          </a>
          <a href="" target="blank">
            Back in Stock
          </a>
          <a href="" target="blank">
            Black Designers & Black-Owned Brands
          </a>
          <a href="" target="blank">
            Caroline's Hearts
          </a>
          <a href="" target="blank">
            Designer Boutique
          </a>
          <a href="" target="blank">
            Editors' Picks
          </a>
          <a href="" target="blank">
            Fashion Finds: Under $200
          </a>
          <a href="" target="blank">
            Most Hearted Styles
          </a>
          <a href="" target="blank">
            Shop by Occasion
          </a>
        </div>
        <div className="subdiv-two">
          {/* <img
            src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/desktop/mastheads/2022/2022_05/sb_20220506_desktop_WNMH_mother_1-2.jpg"
            alt="image"
            className="head-image"
          /> */}
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
              <p className="filter-p">SORT BY</p>
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
            {/* <div> pagination need to added</div> */}
          </div>
          <div className="sub-content-div-one">
            {/* {products.map((e) => (
              <div key={e.id} className="for-bc-color">
                <img src={e.image_2} className="content-image-one"></img>
                <p className="content-div-ptag-one">{e.title}</p>
                <p className="content-div-ptag-two">{e.company}</p>
                <p className="content-div-ptag-three">{e.price}</p>
              </div>
            ))} */}
            {posts.length > 0 ? (
              <>
                <Pagination
                  data={posts}
                  RenderComponent={Post}
                  title="Posts"
                  pageLimit={4}
                  dataLimit={16}
                />
              </>
            ) : (
              <h1>No Posts to display</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
