import * as React from "react";
import {OptionLink} from "../footer.styles";
// @ts-ignore
import icon_facebook from "../../../assets/images/icono-footer-facebook.svg?url";
// @ts-ignore
import icon_instagram from "../../../assets/images/icono-footer-instagram.svg?url";
// @ts-ignore
import icon_twitter from "../../../assets/images/icono-footer-twitter.svg?url";
// @ts-ignore
import icon_youtube from "../../../assets/images/icono-footer-youtube.svg?url";
import {SocialBox} from "./social.styles";

const SocialMedia = () => (
        <SocialBox>
            <li>
            <OptionLink href='https://www.facebook.com/bazsuperapp' target='_black'><img src={icon_facebook} alt="logo"/></OptionLink>
            </li>
            <li>
                <OptionLink href='https://www.instagram.com/bazsuperapp/' target='_black'> <img src={icon_instagram} alt="logo"/></OptionLink>
            </li>
            <li>
                <OptionLink href='https://twitter.com/bazsuperapp' target='_black'> <img src={icon_twitter} alt="logo"/></OptionLink>
            </li>
            <li>
                <OptionLink href='https://www.youtube.com/channel/UC1RI55yd6h8ashNVYO3LefA' target='_black'> <img src={icon_youtube} alt="logo"/></OptionLink>
            </li>
        </SocialBox>
);

export default SocialMedia;