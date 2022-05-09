import {Link} from "react-router-dom";
import styled from "styled-components";
export const Navbar = () => {
  const nav = [
    {title: "Home", to: "/"},
    {title: "WhatsNew", to: "/what'snew"},
    {title: "OurFavorite", to: "/ourfavorite"},
  ];
  return (
    <div>
      {/* <Link to="/"> Home</Link>
        <Link to="/about"> About</Link> */}
        <Heading>
        <Link to="/"><img src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png" alt="" /></Link>
        </Heading>
        <NavLinks>
      {nav.map((e, i) => (
        <Link key={i} to={e.to} style={{margin: "5px"}}>
          {e.title}
        </Link>
      ))}
      </NavLinks>
    </div>
  );
};
const Heading=styled.div`
  margin:auto;
justify-content: center;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
`
const NavLinks=styled.div`
  text-align: center;
  border: 1px solid #f2c2f2;
  margin-top: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`