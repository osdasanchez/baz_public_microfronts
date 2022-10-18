import * as React from 'react'
import { HeaderContainer, HeaderWraper, BoxContent, LogContainer, Texto, Ingresar, IngresarText, BoxStores } from './heaader-completo.styles';
// @ts-ignore
import BazLogo from '../../assets/baz.svg';
// @ts-ignore
import LogIcon from '../../assets/images/header/log_icon.svg'
// @ts-ignore
import Playstore from '../../assets/images/playstore.svg'
// @ts-ignore
import Applestore from '../../assets/images/apple.svg'

const HeadeCompleto = () => {
    return (
        <HeaderContainer>
            <HeaderWraper>
                <BoxContent>

                    <BoxStores>
                        <BazLogo className="logo" />
                        <Playstore />
                        <Applestore />
                    </BoxStores>

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
    )
}

export default HeadeCompleto