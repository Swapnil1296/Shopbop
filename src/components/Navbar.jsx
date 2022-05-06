import '../css/Navbar.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import React, { useState } from 'react';


export const Navbar = () => {
    const [dDown, setdDown] = useState(false);
    const items = ["WHAT'S NEW", "OUR FAVORITES", "DESIGNERS", "CLOTHING", "ACTIVE", "SHOES", "BAGS", "ACCESSORIES", "MEN", "SALE"];
    return (
        <div className="d_navbar">
            <div className='d_heading'>
                <img className="d_logo" height="45px" src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png" alt="shopbop" />
            </div>
            <div className='d_nav_item'>
                <Stack direction='row' className='d_dropdown'>
                    {items.map(i => <Button href='#'>{i}</Button>)}
                    <CustomSearch onClick={() => setdDown(true)} />
                </Stack>
                <SearchNav show={dDown}>
                    <div>
                        <Stack>
                            <Button>Women</Button>
                            <Button>Men</Button>
                        </Stack>
                        <CloseWrapper>
                            <CustomClose onClick={() => setdDown(false)} />
                        </CloseWrapper>
                    </div>
                    <div>
                        <div><CustomSearch /></div>
                        <div><input placeholder="What are you lokking for?" /></div>
                    </div>
                </SearchNav>
            </div>
        </div>
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
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

