import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const OurFavorites = () => {
    const row1 = ["Spring '22 Trend Edit", "AAPI Designers & AAPI-Owned Brands", "Black Designers $ Black-Owned Brands", "Back In Stock", "Caroline's Hearts", "Designer Boutique", "Editor's Picks", "Fashion Finds: Under $200", "Most Hearted Styles", "Shopbop Exclusives", "Top Sellers"];
    const row2 = ["Best-Dressed Guest", "DAytime Drama", "New 9-To-5", "The Dress Shop", "Vacation Wardrobe", "Wedding Shop"];

    return(
        <div>
            <div>
                <ul>
                    <li><b>OUR FAVORITES</b></li>
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
                    <li><b>SHOP BY OCCASION</b></li>
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
                <a href="#">
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_ourfavorites_slot1_topsellers.jpg" alt="1" />
                    <b>Top Sellers</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2021/2021_07/sb_20210719_desktop_ourfavorites_slot2_mosthearted.jpg" alt="2" />
                    <b>Most-Hearted Stles</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_ourfavorites_slot3_vacation.jpg" alt="3" />
                    <b>Vacation Wardrobe</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
        </div>
    )
}