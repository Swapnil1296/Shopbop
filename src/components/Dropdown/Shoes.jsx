import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export const Shoes = () => {
    const row1 = ["Boots", "Espadrilles", "Flats", "Mules & Slides", "Pumps", "Rain Boots", "Sandals", "Sneakers & Athletic", "All Shoes"];
    const row2 = ["Gia Borghini", "Golden Goose", "Kahmune", "Larroude", "On"];
    const row3 = ["Designer Boutique", "Evening-Ready Shoes", "Wedding Shoes"];
    const row4 = ["Cool Clogs", "Neutral Tones", "Puffed-Up Pairs", "Strappy Sandals"];

    return (
        <div>
            <div>
                <ul>
                    <li><b>SHOES</b></li>
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
                    <li><b>NAMES TO KNOW</b></li>
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
                    <li><b>TRENDS</b></li>
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
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_shoes_slot1_BadgleyMishka.jpg" alt="1" />
                    <b>Step Into Badgley Mischka</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_shoes_slot2_Soludos.jpg" alt="2" />
                    <b>Lace Up In Soludos</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
        </div>
    )
}