import * as React from "react";
import { OptionLink } from "../footer.styles";
import { UlBox } from "./PolicySimpleFooter.styles";
import LegalModal from "components/modal/legal/Legal.component";



export default function Links () {
    const [isOpen, setIsOpen] = React.useState({
        open: false,
        terminos: false,
        aviso: false
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
        <UlBox>
            <ul className='links-list'>
                <li className="first-link" onClick={handleTerminos}>
                    <span>T&eacute;rminos y condiciones</span>
                </li>
                <li className="second-link" onClick={handleAviso}>
                    <span>Aviso de privacidad</span>
                </li>
            </ul>

            {isOpen.open && 
            <LegalModal isOpen={isOpen} setIsOpen={setIsOpen}>
                {isOpen.terminos && <p>T&eacute;rminos y condiciones</p>}
                {isOpen.aviso && <p>Aviso de privacidad</p>}
            </LegalModal>}
        </UlBox> 
    )    
}
