import * as React from 'react'
import { Container } from './money.styles'
import Data from './data/Data'
import Imagen from './imagen/Imagen'

const Money = () => {
    return (
        <Container>
            <Imagen />
            <Data />
        </Container>
    )
}

export default Money