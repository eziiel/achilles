import React from 'react'
import { ButtonUtil } from '../../styled/buttonsStyled'

export const Button = ({title,width,height,padding,background,color,before,boderR,theme,
  colorTheme}) => {

  return (

    <ButtonUtil
      colorTheme = {colorTheme}
      theme={theme}
      padding={padding}
      width = {width}
      height = {height}
      background = {background}
      color = {color}
      before = {before}
      boderR = {boderR}
    
    >{title}</ButtonUtil>

  )
}
