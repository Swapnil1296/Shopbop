import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const Men = () => {
    const row1 = ["Clothing", "Shoes", "Bags", "Accessories", "Sale", "Shop All"];
    const row2 = ["AMI", "Isabel Marant", "Maison Kitsune", "Polo Ralph Lauren", "Veja", "Vince", "All Men's Designers"];
    const row3 = ["What's New", "Top Sellers", "The Basics", "Explore thje Latest"];

    return (
        <div>
            <div>
                <ul>
                    <li><b>MEN</b></li>
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
                    <li><b>FEATURED DESIGNERS</b></li>
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
                    <li><b>DISCOVER</b></li>
                    {row3.map(i => {
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
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_men_slot1_freedommoses.jpg" alt="1" />
                    <b>Slide Into: Freedom Moses</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
        </div>
    )
}