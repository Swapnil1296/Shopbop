import '../css/Navbar.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import React, { useState } from 'react';
import { WhatsNewDropdown } from './Dropdown/WhatsNewDropdown.jsx';
import { Link } from 'react-router-dom';
import { OurFavorites } from './Dropdown/OurFavorites';
import { Designer } from './Dropdown/Designer';
import { Clothing } from './Dropdown/Clothing';


export const Navbar = () => {
    const [dDown, setdDown] = useState(false);
    const [dMenu, setDmenu] = useState(false);
    const items = ["WHAT'S NEW", "OUR FAVORITES", "DESIGNERS", "CLOTHING", "ACTIVE", "SHOES", "BAGS", "ACCESSORIES", "MEN", "SALE"];
    return (
        <>
            <div className="d_navbar">
                <div className='d_heading'>
                    <img className="d_logo" height="45px" src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png" alt="shopbop" />
                </div>
                <div className='d_nav_item'>
                    {/* <Stack direction='row' className='d_dropdown'>
                        {items.map(i => {
                            if({i} === "WHAT'S NEW"){
                                return (
                                    <>
                                        <Button key={i} className='d_drop_but'>{i}</Button>
                                        { dMenu && <Dropdown />}
                                    </>
                                )
                            }else {
                                return (
                                    <Button key={i} className='d_drop_but'>{i}</Button>
                                )
                            }
                            
                        })}
                        
                            
                            
                        <CustomSearch onClick={() => setdDown(true)} />
                    </Stack> */}
                    <ul>
                        {items.map(i => {
                            if({i} === "WHAT'S NEW"){
                                return (
                                    <li key={i} onMouseEnter={()=> setDmenu(true)} onMouseLeave={()=> setDmenu(false)}>
                                        <Link className='d_drop_but' to={i}>{i}</Link>
                                        { dMenu && <WhatsNewDropdown/>}
                                    </li>
                                );
                            }
                            return (
                                <li key={i}>
                                    <Link className='d_drop_but' to={i}>{i}</Link>
                                </li>
                                
                            )
                        })}
                    </ul>
                    <CustomSearch onClick={() => setdDown(true)} />
                    <SearchNav show={dDown}>
                        <div className="d_head">
                            <div  className="d_head_3">
                                <Stack direction='row' >
                                    <Button className='d_sex_but'>Women</Button>
                                    <Button className='d_sex_but'>Men</Button>
                                </Stack>
                            </div>
                            <div>
                                <CloseWrapper>
                                    <CustomClose onClick={() => setdDown(false)} />
                                </CloseWrapper>
                            </div>
                        </div>
                        <div className='d_main'>
                            <div className='d_searchBut'><CustomSearch /></div>
                            <div><input placeholder="What are you looking for?" /></div>
                        </div>
                    </SearchNav>
                </div>
                <WhatsNewDropdown />
                <OurFavorites />
                <Designer />
                <Clothing />
            </div>
            
            </>
    )
}



const SearchNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 50%;
  height: 100%;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CustomSearch = styled(SearchIcon)`
    margin-top: 7px;
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

