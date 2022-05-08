import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState } from "react";
import '../../css/Dropdown_css/Bags.css'


export const Bags = () => {
    const [dd, setDd] = useState(false);

    const row1 = ["Backpacks", "Beach & Starw Bags", "Belt Bags", "Bucket Bags", "Clutches", "Cross Body Bags", "Luggage & Weekenders", "Mini Bags", "Satchels & Top Handles", "Shoulder Bags", "Totes", "Wallets & Card Holders", "Bag Accessories & Pouches", "All Bags"];
    const row2 = ["Clare V.", "JW Anderson", "Marc Jacobs", "STUAD", "Tory Burch"];
    const row3= ["Bags Under $300", "Designer Boutique", "Vintage Bags"];
    const row4= ["Cool Xrochet", "Neutral Tone", "Night-Out Bags"];

    return (
        <div className={dd ? "d_dd_acc clicked" : "d_dd_acc"}>
            <div className="d_dd_menu_acc">
                <div className="d_dd_subMenu_acc">
                    <div>
                        <ul className='d_services-submenu_acc' onClick={() => setDd(!dd)}>
                            <li><b>BAGS</b></li>
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
                            <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_bags_slot1_ReeProjects.jpg" alt="1" />
                            <b>Spotlight On: Ree Projects</b>
                            <Stack>
                                <Button>Shop Now</Button>
                            </Stack>
                        </a>
                    </div>
                    <div className="d_dd_img_acc">
                        <a href="#" onClick={() => setDd(!dd)}>
                            <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_bags_slot2_bucketbags.jpg" alt="2" />
                            <b>Bring-It-All Bucket Bags</b>
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