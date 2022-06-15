
import React from 'react'
import * as S from "./../styled/footerStyled"
import { Titulo } from '../styled/mainStyled'
import { Button } from './utils/button'
import fotos from "../images/social.json"
// import logoIn from "../images/in.svg"



export const Footer = () => {
  return (

    <S.FooterA>
      <Titulo>Let's Conect</Titulo>
      <S.FooterP>Get in touch for opportunities or just to say hi! 👋</S.FooterP>
           
           <S.FooterSocial>

            {
              fotos.map(({src,alt}) => (
                  <Button
                  key={alt} 
                  padding="1.5rem"
                  background = {`#050607 url(${src}) center no-repeat`} 
                  before
                  color = "#FFCD74"
                  >
                  </Button>
                ))
              }



           </S.FooterSocial>
           
    </S.FooterA>
  )
}
