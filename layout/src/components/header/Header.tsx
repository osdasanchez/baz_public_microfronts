import * as React from "react";
import {BoxContent, HeaderContainer, HeaderWraper} from "./header.styles";
// @ts-ignore
import  BazLogo  from '../../assets/baz.svg';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderWraper>
                <BoxContent>
                    <BazLogo className="logo"  />
                </BoxContent>
            </HeaderWraper>
        </HeaderContainer>
    );
}

export default Header;