import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export const Designer = () => {
    const row1= ["A  B  C  D  E", "F  G  H  I  J", "K  L  M  N  O", "P  Q  R  S  T", "U  V  W  X  Y", "Z  #", "Designer Boutique Index", "All Women's Designers", "All Men's Designers"];
    const row2 = ["La Double J", "GANNI", "Nanushka", "STAUD", "STAND STUDIO"];
    const row3 = ["AGOLDE", "Golden Goose", "MOTHER", "Ulla Johnson", "Vince"];

    return (
        <div>
            <div>
                <ul>
                    <li><b>DESIGNERS</b></li>
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
                    <li><b>TOP DESIGNERS</b></li>
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
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_designers_slot1_NiliLotan.jpg" alt="1" />
                    <b>Polished Pieces: Nili Lotan</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_designers_slot2_cultgaia.jpg" alt="2" />
                    <b>Just Beachy: Cult Gaia</b>
                    <Stack>
                        <Button>Shop Now</Button>
                    </Stack>
                </a>
            </div>
        </div>
    )
}