import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState } from "react";
import '../../css/Dropdown_css/Shoes.css';

export const Shoes = () => {
    const [dd, setDd] = useState(false);

    const row1 = ["Boots", "Espadrilles", "Flats", "Mules & Slides", "Pumps", "Rain Boots", "Sandals", "Sneakers & Athletic", "All Shoes"];
    const row2 = ["Gia Borghini", "Golden Goose", "Kahmune", "Larroude", "On"];
    const row3 = ["Designer Boutique", "Evening-Ready Shoes", "Wedding Shoes"];
    const row4 = ["Cool Clogs", "Neutral Tones", "Puffed-Up Pairs", "Strappy Sandals"];

    return (
        <div className={dd ? "d_dd_acc clicked" : "d_dd_acc"}>
            <div className="d_dd_menu_acc">
                <div className="d_dd_subMenu_acc">
                    <div>
                        <ul className='d_services-submenu_acc' onClick={() => setDd(!dd)}>
                            <li><b>SHOES</b></li>
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
                            <li><b>NAMES TO KNOW</b></li>
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
                            <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_shoes_slot1_BadgleyMishka.jpg" alt="1" />
                            <b>Step Into Badgley Mischka</b>
                            <Stack>
                                <Button>Shop Now</Button>
                            </Stack>
                        </a>
                    </div>
                    <div className="d_dd_img_acc">
                        <a href="#" onClick={() => setDd(!dd)}>
                            <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_shoes_slot2_Soludos.jpg" alt="2" />
                            <b>Lace Up In Soludos</b>
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