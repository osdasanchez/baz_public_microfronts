import React from 'react'
import { BtnContainer, Container, Nivel1, Nivel2, Nivel3 } from './diversion.styles';
import Fondo from './fondo/Fondo';
import Boton from './boton/Boton';
// @ts-ignore
import podcast from '../../../assets/images/shop/Diversion/podcast.svg?url'
// @ts-ignore
import musica from '../../../assets/images/shop/Diversion/musica.svg?url'
// @ts-ignore
import juegos from '../../../assets/images/shop/Diversion/juegos.svg?url'
// @ts-ignore
import pelicula from '../../../assets/images/shop/Diversion/peliculas.svg?url'
// @ts-ignore
import tv from '../../../assets/images/shop/Diversion/tv.svg?url'

const Diversion = () => {

  const txt_podcast = 'Podcast';
  const txt_musica = 'Música';
  const txt_juegos = 'Juegos';
  const txt_pelicula = 'Películas';
  const txt_tv = 'TV en vivo';

  return (
    <Container>
      <Fondo />

      <BtnContainer>
        <Nivel1>
          <Boton logo={juegos} nombre={txt_juegos} />
        </Nivel1>

        <Nivel2>
          <Boton logo={musica} nombre={txt_musica} />
          <Boton logo={pelicula} nombre={txt_pelicula} />
        </Nivel2>

        <Nivel3>
          <Boton logo={podcast} nombre={txt_podcast} />
          <Boton logo={tv} nombre={txt_tv} />
        </Nivel3>
      </BtnContainer>

    </Container>
  )
}

export default Diversion