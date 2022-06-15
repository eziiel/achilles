import React from 'react'
import * as S from '../styled/worksStyled'
import images from "../images/works.json"
import { Titulo } from '../styled/mainStyled'
import { ContextTheme } from '../contextTheme'




const Works = () => {
  const {statusTheme} = React.useContext(ContextTheme)


  const[inicio,SetInicio] = React.useState(0)
  const[movimento,SetMovimento] = React.useState(0)
  const[final,SetFinal] = React.useState(0)
  const refWork = React.useRef()




  function handleMouseDown (e) {
    e.preventDefault()
    // console.log(e.clientX)
    SetInicio(e.clientX)
    inicio && console.log(inicio)
    

    refWork.current.addEventListener('mousemove', handleMouseMove)
    refWork.current.addEventListener('mouseup', handleMouseUp)
  }
  
  function handleMouseMove (e) {
    // console.log("a")
    SetMovimento(inicio - e.clientX )
    // SetMovimento(inic  io - e.clientX)
  }
  function handleMouseUp (e) {
    SetFinal(inicio - e.clientX)
    console.log(final)
    refWork.current.removeEventListener('mousemove', handleMouseMove)
  }

  return (
    <S.DivWorks>
      <S.InfoWorks>
        <Titulo fontS="2rem">Recent NFT</Titulo>
        <S.SpanInfo theme={statusTheme} left="90%">VIEW MORE</S.SpanInfo>
      </S.InfoWorks>

      <S.DivWorksphotos
        move ={`${movimento}px,0px,0px `}
        onMouseDown={handleMouseDown}
        ref={refWork}
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