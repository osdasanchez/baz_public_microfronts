import * as React from "react";
import { OptionLink } from "../footer.styles";
import { UlBox, TextPolicy } from './Policy.styles';
// @ts-ignore
import LegalModal from "components/modal/legal/Legal.component";
export default function Links() {

    // const [isOpen, setIsOpen] = React.useState({
    //     open: false,
    //     terminos: false,
    //     aviso: false,
    //     aclaraciones: false
    // })

    // const handleAviso = () => {
    //     setIsOpen(prevState => {
    //         return {
    //             ...prevState,
    //             open: !prevState.open,
    //             aviso: !prevState.aviso
    //         }
    //     })
    // }

    // const handleAclaraciones = () => {
    //     setIsOpen(prevState => {
    //         return {
    //             ...prevState,
    //             open: !prevState.open,
    //             aclaraciones: !prevState.aclaraciones
    //         }
    //     })
    // }

    // const handleTerminos = () => {
    //     setIsOpen(prevState => {
    //         return {
    //             ...prevState,
    //             open: !prevState.open,
    //             terminos: !prevState.terminos
    //         }
    //     })
    // }

    return (
        <UlBox className='links-list'>
            <li>
                <TextPolicy>T&eacute;rminos y condiciones</TextPolicy>
            </li>
            <li>
                <TextPolicy>Aclaraciones</TextPolicy>
            </li>
            <li>
                <TextPolicy>Aviso de privacidad</TextPolicy>
            </li>
            {/* {isOpen.open &&
                <LegalModal isOpen={isOpen} setIsOpen={setIsOpen}>
                    {isOpen.terminos && <p>T&eacute;rminos y condiciones</p>}
                    {isOpen.aclaraciones && <p>Aclaraciones</p>}
                    {isOpen.aviso && <p>Aviso de privacidad</p>}
                </LegalModal>} */}
        </UlBox>
    );
}
