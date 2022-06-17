import React from 'react'
import { ButtonUtil } from '../../styled/buttonsStyled'

export const Button = ({title,width,height,padding,background,color,before,boderR,theme,
  colorTheme,letter,margin,footer}) => {

  return (

    <ButtonUtil
      letter = {letter}
      margin = {margin}
      colorTheme = {colorTheme}
      theme={theme}
      padding={padding}
      width = {width}
      height = {height}
      background = {background}
      color = {color}
      before = {before}
      footer = {footer}
      boderR = {boderR}
    
    >{title}</ButtonUtil>

  )
}
