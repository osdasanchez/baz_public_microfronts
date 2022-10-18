import * as React from 'react'
import { QrContainer, Store, StoresContainer, ItemStore } from './store.styles';
// @ts-ignore
import Qr_image from "../../../assets/images/qr_picture.svg";
// @ts-ignore
import Google_play from "../../../assets/images/google-play.svg?url";
// @ts-ignore
import Apple_store from "../../../assets/images/group-2-copy-2.svg?url";

const Stores = () => {
    return (
        <StoresContainer>
            <QrContainer>
                <img src={Qr_image} className='logo_qr' />
            </QrContainer>

            <Store>
                <ItemStore>Escanea el código con tu celular</ItemStore>
                <Google_play className="logo_store"/>
                <Apple_store className="logo_store"/>
            </Store>
        </StoresContainer>
    )
}

export default Stores
