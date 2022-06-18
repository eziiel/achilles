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
    if(e.type == "mousedown") {
      e.preventDefault()  
      setStatusMov(true)
      setInicio(e.clientX)
    } else {
      setInicio(e.changedTouches[0].clientX)
      setStatusMov(true)
    }
  }
  
  function handleMouseMove (e) {
    statusMov && e.type == "mousemove" && SetMovimento(previus => previus = final + (inicio - e.clientX))
    statusMov && e.type == "touchmove" &&SetMovimento(previus => previus = final + (inicio - (e.changedTouches[0].clientX)))
  }
  
  React.useEffect(()=>{
    movimento < -150 && SetMovimento(0)
    movimento > 550 && SetMovimento(400)
  },[movimento])
    
  function handleMouseUp (e) {
    setStatusMov(false)

    SetFinal(movimento)
  }
  function handleMouseLeave (e) {
    SetFinal(movimento)
    setStatusMov(false)
  }
  

  console.log(images)

  return (
    <S.DivWorks>
      <S.InfoWorks>
        <Titulo fontS="2rem">Recent NFT</Titulo>
        <S.SpanInfo theme={statusTheme} >VIEW MORE</S.SpanInfo>
      </S.InfoWorks>

      <S.DivWorksphotos
        move ={`translate3D(${-movimento}px,0px,0px)`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
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