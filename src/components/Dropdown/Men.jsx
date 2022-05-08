import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState } from "react";
import '../../css/Dropdown_css/Men.css';


export const Men = () => {
    const [dd, setDd] = useState(false);
    const row1 = ["Clothing", "Shoes", "Bags", "Accessories", "Sale", "Shop All"];
    const row2 = ["AMI", "Isabel Marant", "Maison Kitsune", "Polo Ralph Lauren", "Veja", "Vince", "All Men's Designers"];
    const row3 = ["What's New", "Top Sellers", "The Basics", "Explore thje Latest"];

    return (
        <div className={dd ? "d_dd_main clicked" : "d_dd_main"}>
            <div className="d_dd_menu">
                <div className="d_dd_subMenu">
                    <div>
                        <ul className='d_services-submenu' onClick={() => setDd(!dd)}>
                            <li><b>MEN</b></li>
                            {row1.map(i => {
                                return (
                                    <>
                                        <li key={i}>
                                            <Link to={i} className="d_services-sub-link" onClick={() => setDd(false)}>{i}</Link>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <ul className='d_services-submenu' onClick={() => setDd(!dd)}>
                            <li><b>FEATURED DESIGNERS</b></li>
                            {row2.map(i => {
                                return (
                                    <>
                                        <li key={i}>
                                            <Link to={i} className="d_services-sub-link" onClick={() => setDd(false)}>{i}</Link>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <ul className='d_services-submenu' onClick={() => setDd(!dd)}>
                            <li><b>DISCOVER</b></li>
                            {row3.map(i => {
                                return (
                                    <>
                                        <li key={i}>
                                            <Link to={i} className="d_services-sub-link" onClick={() => setDd(false)}>{i}</Link>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="d_dd_img_m">
                    <div className="d_dd_img">
                        <a href="#" onClick={() => setDd(!dd)}>
                            <img width="386px" src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_men_slot1_freedommoses.jpg" alt="1" />
                            <b>Slide Into: Freedom Moses</b>
                            <Stack>
                                <Button>Shop Now</Button>
                            </Stack>
                        </a>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}