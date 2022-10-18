import * as React from "react";
import { BoxContent, HeaderContainer, HeaderWraper, Ingresar, IngresarText, LogContainer, Texto } from "./header.styles";
// @ts-ignore
import BazLogo from '../../assets/baz.svg';
// @ts-ignore
import LogIcon from '../../assets/images/header/log_icon.svg'
import {useEffect, useState} from "react";
import { animateScroll as scroll } from 'react-scroll';

const Header = () => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <HeaderContainer scrollNav={scrollNav}>
            <HeaderWraper>
                <BoxContent>
                    {/*<BazLogo className="logo" />*/}
                    <img src={BazLogo} className="logo" />
                    <LogContainer>
                        <Texto>Negocios</Texto>
                        <Ingresar>
                            {/*<LogIcon />*/}
                            <img src={LogIcon}  />
                            <IngresarText>Ingresar</IngresarText>
                        </Ingresar>
                    </LogContainer>
                </BoxContent>
            </HeaderWraper>
        </HeaderContainer>
    );
}

export default Header;