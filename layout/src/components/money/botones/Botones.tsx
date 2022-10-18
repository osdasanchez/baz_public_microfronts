import * as React from 'react'
import { Container, Icon, Texto } from './botones.styles'
// @ts-ignore
import money from '../../../assets/images/money/money_icon.svg'
// @ts-ignore
import around from '../../../assets/images/money/around_icon.svg'
// @ts-ignore
import chat from '../../../assets/images/money/msj_icon.svg'
// @ts-ignore
import pagoQr from '../../../assets/images/money/qr_icon.svg'
// @ts-ignore
import service from '../../../assets/images/money/pay_service_icon.svg'
// @ts-ignore
import atm from '../../../assets/images/money/atm_icon.svg'
// @ts-ignore
import ventanilla from '../../../assets/images/money/ventanilla_icon.svg'
// @ts-ignore
import cobroQr from '../../../assets/images/money/mobile_icon.svg'
// @ts-ignore
import giftcard from '../../../assets/images/money/gift_icon.svg'
// @ts-ignore
import wifi from '../../../assets/images/money/wifi_icon.svg'
// @ts-ignore
import ta from '../../../assets/images/money/ta_icon.svg'

const Botones = () => {

    const data = [
        { id: 1, img: 'Money', url: money, datos: 'Enviar dinero a cuenta' },
        { id: 2, img: 'Around', url: around, datos: 'Enviar dinero a número celular' },
        { id: 3, img: 'Chat', url: chat, datos: 'Pagar por chat' },
        { id: 4, img: 'PagoQr', url: pagoQr, datos: 'Pagar con código Qr' },
        { id: 5, img: 'Service', url: service, datos: 'Pagar un servicio' },
        { id: 6, img: 'Atm', url: atm, datos: 'Retirar en cajero ATM' },
        { id: 7, img: 'Ventanilla', url: ventanilla, datos: 'Retirar en ventanilla' },
        { id: 8, img: 'CobroQr', url: cobroQr, datos: 'Cobrar con Qr' },
        { id: 9, img: 'Giftcard', url: giftcard, datos: 'Comprar tarjetas de regalo' },
        { id: 10, img: 'Wifi', url: wifi, datos: 'Pagar por cercanía' },
        { id: 11, img: 'Ta', url: ta, datos: 'Recargar tiempo aire' },
    ]
    return (
        <>
            {
                data.map(item => {
                    return (
                        <Container>
                            <Icon>
                                <img src={item.url} />
                            </Icon>
                            <Texto>{item.datos}</Texto>
                        </Container>
                    )
                })
            }
        </>
    )
}

export default Botones
