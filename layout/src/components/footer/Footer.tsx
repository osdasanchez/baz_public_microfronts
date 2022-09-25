import * as React from 'react'
import {
    BoxContent,
    BoxLogo,
    BoxPolicy,
    BoxSocial,
    BoxStores,
    FooterContainer,
    FooterWrapper,
    Line,
    LogoContainer,
} from "./footer.styles";
// @ts-ignore
import BazLogo from "../../assets/images/logo-desktop.svg";
import Social from "./social/social.component";
import Contact from "./contact/contact.component";
//import Links from "./policy/policy.component";
import Copy from "./copy/copy.component";
import Stores from "./stores/stores.component";


const Footer = () => {

    return (


        <FooterContainer id="footer-main">
            <FooterWrapper>
                <BoxContent>
                    <BoxLogo>
                        <LogoContainer>
                            <BazLogo className='logo'/>
                        </LogoContainer>
                    </BoxLogo>
                    <BoxSocial>
                        <Social/>
                        <Contact/>
                    </BoxSocial>
                {/*    <BoxPolicy>

                    </BoxPolicy>*/}
                    <BoxStores>
                        <Stores/>
                    </BoxStores>
                </BoxContent>
                <Line/>
                <Copy/>

            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;