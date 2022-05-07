import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export const Activewear = () => {
    const row1 = ["Dresses & Jumpsuits", "Leggings", "Matching Sets", "Shorts & Skirts", "Sports Bras", "Sweatpants", "Sweatshirts & Jackets", "Tops", "All Clothing"];
    const row2 = ["Active Accessories", "Bags", "Sneakers"];
    const row3 = ["Alo Yoga", "Beyond Yoga", "Girlfriend Collectives", "Sweaty Betty", "Year of Ours"];
    const row4 = ["24/7 Active", "Ski", "Sport", "Tennis", "Yoga & Lounge"];

    return (
        <div>
            <div>
                <ul>
                    <li><b>CLOTHING</b></li>
                    {row1.map(i => {
                        return (
                            <>
                                
                                <li key={i}>
                                    <Link to={i}>{i}</Link>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>ACCESSORIES</b></li>
                    {row2.map(i => {
                        return (
                            <>
                                
                                <li key={i}>
                                    <Link to={i}>{i}</Link>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>NAMES TO KNOW</b></li>
                    {row3.map(i => {
                        return (
                            <>
                                
                                <li key={i}>
                                    <Link to={i}>{i}</Link>
                                </li>
                            </>
                        )
                    })}
                    <li><b>DISCOVER</b></li>
                    {row4.map(i => {
                        return (
                            <>
                                
                                <li key={i}>
                                    <Link to={i}>{i}</Link>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </div>
            <div>
                <a href="#">
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_active_slot1_tennis.jpg" alt="1" />
                    <b>Now Trending: Tennis Styles</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_active_slot2_accessories.jpg" alt="2" />
                    <b>Gear Up: Active Staples</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
        </div>
    )
}