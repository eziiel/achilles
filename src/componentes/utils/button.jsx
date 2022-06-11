import React from 'react'
import { ButtonUtil } from '../../styled/buttons'

export const Button = ({title,width,height,padding,background,color,before,boderR}) => {
  return (

    <ButtonUtil
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
