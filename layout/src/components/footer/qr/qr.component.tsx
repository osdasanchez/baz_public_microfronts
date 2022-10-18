import * as React from 'react'
// @ts-ignore
import qr_img from '../../../assets/images/qr_picture.svg?url'
import { QrBox, QrContainer, TextoQr } from './qr.styles'

const Qr = () => {
    return (
        <QrContainer>
            <QrBox>
                <img src={qr_img} alt="logo" />
                <TextoQr>Escanea el código con tu celular</TextoQr>
            </QrBox>
        </QrContainer>
    )
}

export default Qr