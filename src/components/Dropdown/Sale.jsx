import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState } from "react";
import '../../css/Dropdown_css/Sale.css'

export const Sale = () => {
    const [dd, setDd] = useState(false);

    const row1 = ["All Sale", "New To Sale", "20% Off", "30% Off", "40% Off", "50% Off - Final Sale", "60% Off & Over - Final Sale"];
    const row2 = ["Clothing", "Shoes", "Bags", "Jewelry & Accessories", "Designer Boutique", "Men"];
    const row3 = ["alice + olivia", "Madewell", "Sea", "Ulla Johnson", "Villa Rouge"];
    const row4 = ["Best of Sale", "Sale Picks Under $100", "Sale Picks Under $250"];
    const row5 = ["X-Small", "Small", "Medium", "Large", "X-Large"];

    return (
        <div className={dd ? "d_dd_main clicked" : "d_dd_main"}>
            <div className="d_dd_menu">
                <div className="d_dd_subMenu">
                    <div>
                        <ul className='d_services-submenu' onClick={() => setDd(!dd)}>
                            <li><b>SALE</b></li>
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
                            <li><b>SALE BY CATEGORY</b></li>
                            {row2.map(i => {
                                return (
                                    <>
                                        <li key={i}>
                                            <Link to={i} className="d_services-sub-link" onClick={() => setDd(false)}>{i}</Link>
                                        </li>
                                    </>
                                )
                            })}
                            <li><b>SALE BY DESIGNER</b></li>
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
                    <div>
                        <ul className='d_services-submenu' onClick={() => setDd(!dd)}>
                            <li><b>DISCOVER</b></li>
                            {row4.map(i => {
                                return (
                                    <>
                                        <li key={i}>
                                            <Link to={i} className="d_services-sub-link" onClick={() => setDd(false)}>{i}</Link>
                                        </li>
                                    </>
                                )
                            })}
                            <li><b>SALE CLOTHING BY SIZE</b></li>
                            {row5.map(i => {
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
                            <img width="386px" src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_03/sb_20220131_desktop_sale_slot1_newtosale.jpg" alt="1" />
                            <b>New to Sale</b>
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