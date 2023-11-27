import React from "react";
import "../App";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer=()=>
{
    return(
        <div className="footer">
            <p>Books App 2023&copy;</p>
            <InstagramIcon/>
            <WhatsAppIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>
        </div>
    )
}
export default Footer;