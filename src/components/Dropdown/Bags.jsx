import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export const Bags = () => {
    const row1 = ["Backpacks", "Beach & Starw Bags", "Belt Bags", "Bucket Bags", "Clutches", "Cross Body Bags", "Luggage & Weekenders", "Mini Bags", "Satchels & Top Handles", "Shoulder Bags", "Totes", "Wallets & Card Holders", "Bag Accessories & Pouches", "All Bags"];
    const row2 = ["Clare V.", "JW Anderson", "Marc Jacobs", "STUAD", "Tory Burch"];
    const row3= ["Bags Under $300", "Designer Boutique", "Vintage Bags"];
    const row4= ["Cool Xrochet", "Neutral Tone", "Night-Out Bags"];

    return (
        <div>
            <div>
                <ul>
                    <li><b>BAGS</b></li>
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
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_bags_slot1_ReeProjects.jpg" alt="1" />
                    <b>Spotlight On: Ree Projects</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_bags_slot2_bucketbags.jpg" alt="2" />
                    <b>Bring-It-All Bucket Bags</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
        </div>
    )
}