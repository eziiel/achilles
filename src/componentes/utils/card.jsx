import React from 'react'
import { Titulo } from '../../styled/mainStyled'
import { Button } from './button'
import  * as S from "../../styled/cardStyled"


export const Card = ({img,info,title,button,fontT,leftItem,rightItem, top,
bgc,padding,gridcolum,imgRight,imgLeft,widthitem,margin,letter}) => {


  return (
    <S.CardItens>

      <S.imgItem
        imgBg={img}
        imgLeft={imgLeft}
        imgRight={imgRight}
      ></S.imgItem>

      <S.infoItens
      widthitem={widthitem}
      gridcolum={gridcolum}
      top={top}
      padding={padding}
      bgc={bgc}
      left={leftItem}
      right={rightItem}
      >
        <Titulo fontS={fontT}>{title}</Titulo>
        <S.P>{info}</S.P>
        <Button
         background="linear-gradient(45deg, #FFE5A1, #dc9915 50%, #FFCD74)"
         padding=".5rem 1rem"
         color = "#0A0D11"
         boderR = "5px"
         title={button}
         margin ={margin}
         letter={letter}
        ></Button>
      </S.infoItens>


    </S.CardItens>

  )
}
