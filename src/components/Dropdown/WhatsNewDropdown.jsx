import { Link } from "react-router-dom";
import '../../css/Dropdown_css/WhatsNewDropdown.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState } from "react";

export const WhatsNewDropdown = () => {
    const [dd, setDd] = useState(false);

    const row1 = ["New Today", "New This Week", "Top Sellers", "Designer Boutique", "All What's New",];
    const row2 = ["Clothing", "Shoes", "Bags", "Jewelry & Accessories", "Mentions",];
    const row3 = ["Party Perfect", "Destination Dresses", "The Letest From Cult Gaia", "Adventure Time", "Dream Dresses"];
    return (
        <div className={dd ? "d_dd_main clicked" : "d_dd_main"}>
            <div  className="d_dd_menu">
                <div  className="d_dd_subMenu">
                    <div >
                        <ul className='d_services-submenu' onClick={() => setDd(!dd)}>
                            
                            <li><b>WHAT'S NEW</b></li>
                            {row1.map(r => {
                                return (
                                    <li>
                                        <Link className="d_services-sub-link" to={r} onClick={() => setDd(false)}>{r}</Link>
                                    </li>)}
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className='d_services-submenu' onClick={() => setDd(!dd)}>
                            <li><b>WHAT'S NEW BY CATEGORY</b></li>
                            {row2.map(r => {
                                return (
                                    <li>
                                        <Link className="d_services-sub-link" to={r} onClick={() => setDd(false)}>{r}</Link>
                                    </li>)}
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className='d_services-submenu' onClick={() => setDd(!dd)}>
                            <li><b>DISCOVER</b></li>
                            {row3.map(r => {
                                return (
                                    <li>
                                        <Link className="d_services-sub-link" to={r} onClick={() => setDd(false)}>{r}</Link>
                                    </li>)}
                                )
                            }
                        </ul>
                    </div>
                </div>
                
                <div className="d_dd_img">
                    <a href="#" onClick={() => setDd(!dd)}>
                        <img width="386px" src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_whatsnew_slot1_dresses.jpg" alt="What's New" />
                        <b>The Dress Shop</b>
                        <Stack>
                            <Button>Shop Now</Button>
                        </Stack>
                    </a>
                </div>
            </div>
        </div>
        
    )
} 

