import React from "react";
import {
  AccordionContainer,
  Contenedor,
  Datos,
  Subtitulo,
  Titulo
} from "./faq.styles";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

const Faq = () => {
  return (
    <Contenedor>
      <Titulo>Preguntas frecuentes</Titulo>
      <Subtitulo>Contáctanos si tienes otra pregunta</Subtitulo>
      <AccordionContainer>
        <Accordion atomic={true}>
          <AccordionItem title={"¿Qué necesito para abrir una cuenta en baz?"} className='titulo-acordion'>
            <Datos>
              Solo necesitas descargar la app y registrarte con tu teléfono y
              correo electrónico.
            </Datos>
          </AccordionItem>
          <AccordionItem title={"¿Cómo obtengo mi tarjeta baz?"} className='titulo-acordion'>
            <Datos>
              Súper fácil. Solo descarga la app, regístrate y en la sección
              DINERO verás la opción "solicitar tarjeta física.
            </Datos>
          </AccordionItem>
          <AccordionItem title={"¿Puedo usar mi tarjeta baz en cualquier lugar?"} className='titulo-acordion'>
            <Datos>
              ¡Claro! La tarjeta baz es válida para comprar en cualquier lugar o
              incluso para comprar en internet.
            </Datos>
          </AccordionItem>
          <AccordionItem title={"¿Puedo pagar mi crédito de banco en el app de baz?"} className='titulo-acordion'>
            <Datos>
              No, solo el crédito otorgado por baz se puede pagar desde la
              aplicación; pero tambienlo puedes pagar en cualquier sucursal
              Elektra o de Banco Azteca.
            </Datos>
          </AccordionItem>
          <AccordionItem title={"¿Cómo solicito un crédito desde la app?"} className='titulo-acordion'>
            <Datos>
              ¡Fácil! Descarga la app, registrate, ingresa a la sección DINERO y
              solicita el crédito.
            </Datos>
          </AccordionItem>
        </Accordion>
      </AccordionContainer>
    </Contenedor>
  );
};

export default Faq;
