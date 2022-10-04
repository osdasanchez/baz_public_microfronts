import * as React from "react";
import { BoxContent, HeaderContainer, HeaderWraper, Ingresar, IngresarText, LogContainer, Texto } from "./header.styles";
// @ts-ignore
import BazLogo from '../../assets/baz.svg';
// @ts-ignore
import LogIcon from '../../assets/images/header/log_icon.svg'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderWraper>
                <BoxContent>
                    <BazLogo className="logo" />
                    <LogContainer>
                        <Texto>Negocios</Texto>
                        <Ingresar>
                            <LogIcon />
                            <IngresarText>Ingresar</IngresarText>
                        </Ingresar>
                    </LogContainer>
                </BoxContent>
            </HeaderWraper>
        </HeaderContainer>
    );
}

export default Header;