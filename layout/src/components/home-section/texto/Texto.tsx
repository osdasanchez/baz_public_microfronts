import * as React from 'react'
import {
    Container,
    Titulo,
    Subheader,
    ImgContainer,
    ContentContainer,
    ContentContainerList,
    ContentContainerListItem
} from './texto.styles';
// @ts-ignore
import GoogleIcon from '../../../assets/images/google-play.png'
// @ts-ignore
import AppleIcon from '../../../assets/images/apple_store.png'


const Texto = () => {
  const data = ["Compra", "Paga servicios", "Envía dinero", "Renta películas", "TV en vivo", "Escucha música"]
    const data2 = [ "Paga servicios"]

  return (
    <Container>
      {/*<Titulo>Compra</Titulo>*/}
        <ContentContainer>
            <ContentContainerList>
                <div className="slidingVertical">
                    {/*<span>Compra</span>*/}
                    {/*<span>Paga servicios</span>*/}
                    {/*<span>Envía dinero</span>*/}

                    {data.map((item, index) => {
                        return (
                            <span key={index}>{item}</span>
                        )
                    })}
                </div>

                {/*{data.map((item, index) => {*/}
                {/*    return (*/}
                {/*        <ContentContainerListItem key={index}>{item}</ContentContainerListItem>*/}
                {/*    )*/}
                {/*})}*/}

            </ContentContainerList>
        </ContentContainer>
      <Subheader>Todo lo que necesitas en una <span className='negrita'>sola app</span></Subheader>
      <ImgContainer>
        {/*<GoogleIcon />*/}
        {/*<AppleIcon />*/}
          <img src={GoogleIcon}/>
          <img src={AppleIcon}/>
      </ImgContainer>
    </Container>
  )
}

export default Texto
