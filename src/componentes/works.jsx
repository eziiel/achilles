import React from 'react'
import * as S from '../styled/worksStyled'
import images from "../images/works.json"
import { Titulo } from '../styled/mainStyled'
import { ContextTheme } from '../contextTheme'


const Works = () => {
  const {statusTheme} = React.useContext(ContextTheme)
  
  
  const[statusMov,setStatusMov] = React.useState(false)
  const[inicio,setInicio] = React.useState(0)
  const[movimento,SetMovimento] = React.useState(0)
  const[final,SetFinal] = React.useState(0)
  
  function handleMouseDown (e) {
    e.preventDefault()  
    setInicio(e.clientX)
    setStatusMov(true)
  }
  
  function handleMouseMove (e) {
    statusMov && SetMovimento(final + (inicio - e.clientX))
  }
  React.useEffect(()=>{
    movimento < -150 && SetMovimento(0)
    movimento > 550 && SetMovimento(400)
  },[movimento])
    
  
  function handleMouseUp (e) {
    setStatusMov(false)

    SetFinal(movimento)
    console.log(movimento)
  }
  function handleMouseLeave (e) {
    SetFinal(movimento)
    setStatusMov(false)
  }
  
  return (
    <S.DivWorks>
      <S.InfoWorks>
        <Titulo fontS="2rem">Recent NFT</Titulo>
        <S.SpanInfo theme={statusTheme} left="90%">VIEW MORE</S.SpanInfo>
      </S.InfoWorks>

      <S.DivWorksphotos
        move ={`translate3D(${-movimento}px,0px,0px)`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >

        {images.map(({src,alt,title})=> (
          <S.PhotoInfo 
          key={alt}>
            <img src={src} alt={alt} />
            <S.InInfo>{title}</S.InInfo>

          </S.PhotoInfo>
        ))}
      </S.DivWorksphotos>



    </S.DivWorks>


  )
}

export {
  Works
}