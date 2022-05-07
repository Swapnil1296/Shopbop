import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const Clothing = () => {
    const row1 = ["Activewear & Loungewear", "Coats", "Dresses", "Jackets", "Jeans", "Jumpsuits & Rompers", "Lingerie", "Matching Sets", "Maternity", "Pants", "Shorts", "Skirts", "Sleepwear", "Sweaters & Knits", "Swimsuits & Cover-Ups", "Tops", "All Clothing"];
    const row2 = ["AGOLDE", "Levi's", "MOTHER", "Sea", "Vince"];
    const row3 = ["Most Hearted Styles", "Black Designers & black-Owned Brands"];
    const row4 = ["Editor's Picks", "Extended Sizes", "Fashion Finds: Under $200", "Top Sellers"];
    const row5 = ["Best-Dressed Guest", "Daytime Darma", "New 9-To-5", "The Dress Shop", "Vacation Wardrobe", "Wedding Shop"]

    return(
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
                    <li><b>Designer Boutique</b></li>
                    {row4.map(i => {
                        return (
                            <>
                                
                                <li key={i}>
                                    <Link to={i}>{i}</Link>
                                </li>
                            </>
                        )
                    })}
                    <li><b>SHOP BY OCCASION</b></li>
                    {row5.map(i => {
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
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_clothing_slot1_EnglishFactory.jpg" alt="1" />
                    <b>New From English Factory</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_clothing_slot2_oneshoulder.jpg" alt="2" />
                    <b>One-Shoulder Dresses</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
        </div>
    )
}