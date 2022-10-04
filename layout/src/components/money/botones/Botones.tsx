import React from 'react'
import { Container, Icon, Texto } from './botones.styles'
// @ts-ignore
import Money from '../../../assets/images/money/money_icon.svg'
// @ts-ignore
import Around from '../../../assets/images/money/around_icon.svg'
// @ts-ignore
import Chat from '../../../assets/images/money/msj_icon.svg'
// @ts-ignore
import PagoQr from '../../../assets/images/money/qr_icon.svg'
// @ts-ignore
import Service from '../../../assets/images/money/pay_service_icon.svg'
// @ts-ignore
import Atm from '../../../assets/images/money/atm_icon.svg'
// @ts-ignore
import Ventanilla from '../../../assets/images/money/ventanilla_icon.svg'
// @ts-ignore
import CobroQr from '../../../assets/images/money/mobile_icon.svg'
// @ts-ignore
import Giftcard from '../../../assets/images/money/gift_icon.svg'
// @ts-ignore
import Wifi from '../../../assets/images/money/wifi_icon.svg'
// @ts-ignore
import Ta from '../../../assets/images/money/ta_icon.svg'

const Botones = () => {
    const Money = '../../../assets/images/money/money_icon.svg';
    const Around = '../../../assets/images/money/around_icon.svg';
    const Chat = '../../../assets/images/money/msj_icon.svg';
    const PagoQr = '../../../assets/images/money/qr_icon.svg';
    const Service = '../../../assets/images/money/pay_service_icon.svg';
    const Atm = '../../../assets/images/money/atm_icon.svg';
    const Ventanilla = '../../../assets/images/money/ventanilla_icon.svg';
    const CobroQr = '../../../assets/images/money/mobile_icon.svg';
    const Giftcard = '../../../assets/images/money/gift_icon.svg';
    const Wifi = '../../../assets/images/money/wifi_icon.svg';
    const Ta = '../../../assets/images/money/ta_icon.svg';

    const data = [
        { id: 1, img: 'Money', url: '../../../assets/images/money/money_icon.svg', datos: 'Enviar dinero a cuenta' },
        { id: 2, img: 'Around', url: '../../../assets/images/money/around_icon.svg', datos: 'Enviar dinero a número celular' },
        { id: 3, img: 'Chat', url: '../../../assets/images/money/msj_icon.svg', datos: 'Pagar por chat' },
        { id: 4, img: 'PagoQr', url: '../../../assets/images/money/qr_icon.svg', datos: 'Pagar con código Qr' },
        { id: 5, img: 'Service', url: '../../../assets/images/money/pay_service_icon.svg', datos: 'Pagar un servicio' },
        { id: 6, img: 'Atm', url: '../../../assets/images/money/atm_icon.svg', datos: 'Retirar en cajero ATM' },
        { id: 7, img: 'Ventanilla', url: '../../../assets/images/money/ventanilla_icon.svg', datos: 'Retirar en ventanilla' },
        { id: 8, img: 'CobroQr', url: '../../../assets/images/money/mobile_icon.svg', datos: 'Cobrar con Qr' },
        { id: 9, img: 'Giftcard', url: '../../../assets/images/money/gift_icon.svg', datos: 'Comprar tarjetas de regalo' },
        { id: 10, img: 'Wifi', url: '../../../assets/images/money/wifi_icon.svg', datos: 'Pagar por cercanía' },
        { id: 11, img: 'Ta', url: '../../../assets/images/money/ta_icon.svg', datos: 'Recargar tiempo aire' },
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
