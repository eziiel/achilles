import React from 'react'
import { Titulo } from '../../styled/mainStyled'
import  * as S from "../../styled/cardStyled"

export const Card = ({img,info,title,button,fontT,leftItem,rightItem, top,
bgc,padding}) => {
  return (
    <S.CardItens>

      <S.imgItem></S.imgItem>

      <S.infoItens
      top={top}
      padding={padding}
      bgc={bgc}
      left={leftItem}
      right={rightItem}
      >
        <Titulo fontS={fontT}>{title}</Titulo>
        <S.P>{info}</S.P>
        <button>{button}</button>
      </S.infoItens>


    </S.CardItens>

  )
}
