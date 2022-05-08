import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState } from "react";
import '../../css/Dropdown_css/Designer.css';

export const Designer = () => {
    const [dd, setDd] = useState(false);

    const row1= ["A   B   C   D   E", "F   G   H   I   J", "K   L   M   N   O", "P   Q   R   S   T", "U   V   W   X   Y", "Z   #", "Designer Boutique Index", "All Women's Designers", "All Men's Designers"];
    const row2 = ["La Double J", "GANNI", "Nanushka", "STAUD", "STAND STUDIO"];
    const row3 = ["AGOLDE", "Golden Goose", "MOTHER", "Ulla Johnson", "Vince"];

    return (
        <div className={dd ? "d_dd_acc clicked" : "d_dd_acc"}>
            <div className="d_dd_menu_acc">
                <div className="d_dd_subMenu_acc">
                    <div>
                        <ul className='d_services-submenu_acc' onClick={() => setDd(!dd)}>
                            <li><b>DESIGNERS</b></li>
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
                            <li><b>TOP DESIGNERS</b></li>
                            {row3.map(i => {
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
                            <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_designers_slot1_NiliLotan.jpg" alt="1" />
                            <b>Polished Pieces: Nili Lotan</b>
                            <Stack>
                                <Button>Shop Now</Button>
                            </Stack>
                        </a>
                    </div>
                    <div className="d_dd_img_acc">
                        <a href="#" onClick={() => setDd(!dd)}>
                            <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_designers_slot2_cultgaia.jpg" alt="2" />
                            <b>Just Beachy: Cult Gaia</b>
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