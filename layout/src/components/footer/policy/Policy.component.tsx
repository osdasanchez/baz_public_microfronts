import * as React from "react";
import { OptionLink } from "../footer.styles";
import {
    UlBox
} from "./Policy.styles"
import LegalModal from "components/modal/legal/Legal.component";



export default function Links ({showAclaraciones = true})  {

    const [isOpen, setIsOpen] = React.useState({
        open: false,
        terminos: false,
        aviso: false,
        aclaraciones: false
    })

    const handleAviso = () => {
        setIsOpen(prevState => {
            return {
            ...prevState,
            open: !prevState.open,
            aviso: !prevState.aviso

        }
        })
    }

    const handleAclaraciones = () => {
        setIsOpen(prevState => {
            return {
            ...prevState,
            open: !prevState.open,
            aclaraciones: !prevState.aclaraciones

        }
        })
    }

    const handleTerminos = () => {
        setIsOpen(prevState => {
            return {
            ...prevState,
            open: !prevState.open,
            terminos: !prevState.terminos

        }
        })
    }
    
    return (
        <UlBox className='links-list'>
            <li  onClick={handleTerminos}>
                <span>T&eacute;rminos y condiciones</span>
            </li>
            {showAclaraciones &&
            <li  onClick={handleAclaraciones}>
                    <span>Aclaraciones</span>
                </li>
            }
            <li  onClick={handleAviso}>
                <span>Aviso de privacidad</span>
            </li>
            {isOpen.open && 
            <LegalModal isOpen={isOpen} setIsOpen={setIsOpen}>
                {isOpen.terminos && <p>T&eacute;rminos y condiciones</p>}
                {isOpen.aclaraciones && <p>Aclaraciones</p>}
                {isOpen.aviso && <p>Aviso de privacidad</p>}
            </LegalModal>}
        </UlBox> 
    );
}
