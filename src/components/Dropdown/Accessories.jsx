import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState } from "react";
import '../../css/Dropdown_css/Accessories.css';


export const Accessories = () => {
    const [dd, setDd] = useState(false);

    const row1 = ["Active Accessories", "Belts", "Gloves", "Hair Accessories", "Hats", "Home", "Scarves & Wraps", "Socks & Tights", "Sunglasses & Eyewear", "Travel Accessories", "All Jewelry & Accessories"];
    const row2 = ["Fine Jewelry", "Anklets", "Bracelets", "Earrings", "Necklaces", "Rings", "Watches", "All Jewelry"];
    const row3 = ["Designer Boutique", "Home Decor", "Wedding Accessories"];
    const row4 = ["Crafty-Chic Accents", "Mixed-Metal Jewelry", "Statement Pieces"];

    return (
        <div className={dd ? "d_dd_acc clicked" : "d_dd_acc"}>
            <div className="d_dd_menu_acc">
                <div className="d_dd_subMenu_acc">
                    <div>
                        <ul className='d_services-submenu_acc' onClick={() => setDd(!dd)}>
                            <li><b>ACCESSORIES</b></li>
                            {row1.map(i => {
                                return (
                                    <>
                                        <li key={i}>
                                            <Link to={i} className="d_services-sub-link_acc" onClick={() => setDd(false)}>{i}</Link>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <ul className='d_services-submenu_acc' onClick={() => setDd(!dd)}>
                            <li><b>JEWELRY</b></li>
                            {row2.map(i => {
                                return (
                                    <>
                                        <li key={i}>
                                            <Link to={i} className="d_services-sub-link_acc" onClick={() => setDd(false)}>{i}</Link>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <ul className='d_services-submenu_acc' onClick={() => setDd(!dd)}>
                            <li><b>DISCOVER</b></li>
                            {row3.map(i => {
                                return (
                                    <>
                                        <li key={i}>
                                            <Link to={i} className="d_services-sub-link_acc" onClick={() => setDd(false)}>{i}</Link>
                                        </li>
                                    </>
                                )
                            })}
                            <li><b>TRENDS</b></li>
                            {row4.map(i => {
                                return (
                                    <>
                                        <li key={i}>
                                            <Link to={i} className="d_services-sub-link_acc" onClick={() => setDd(false)}>{i}</Link>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="d_dd_img_m_acc">
                    <div className="d_dd_img_acc">
                        <a href="#" onClick={() => setDd(!dd)}>
                            <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_accessories_slot1_HatAttack.jpg" alt="1" />
                            <b>Top It Off: Hat Attack</b>
                            <Stack>
                                <Button>Shop Now</Button>
                            </Stack>
                        </a>
                    </div>
                    <div className="d_dd_img_acc">
                        <a href="#" onClick={() => setDd(!dd)}>
                            <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_accessories_slot2_baseball.jpg" alt="2" />
                            <b>Home Run Hats</b>
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