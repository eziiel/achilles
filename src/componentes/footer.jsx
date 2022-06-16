
import React from 'react'
import * as S from "./../styled/footerStyled"
import { Titulo } from '../styled/mainStyled'
import { Button } from './utils/button'
import fotos from "../images/social.json"
import { ContextTheme } from '../contextTheme'



export const Footer = () => {
  const {statusTheme} = React.useContext(ContextTheme)

  return (

    <S.FooterA>
      <Titulo>Let's Conect</Titulo>
      <S.FooterP theme={statusTheme}>Get in touch for opportunities or just to say hi! 👋</S.FooterP>
           
           <S.FooterSocial>

            {
              fotos.map(({src,alt}) => (
                  <Button
                  key={alt} 
                  padding="2rem"
                  background = {`transparent url(${src}) center no-repeat`} 
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
