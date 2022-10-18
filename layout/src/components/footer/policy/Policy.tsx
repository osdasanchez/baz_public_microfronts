import * as React from 'react'
import { TextPolicy, UlBox } from './Policy.styles';

const Policy = () => {
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
        </UlBox>
    );
}

export default Policy
