import React from 'react'
import * as S from '../styled/worksStyled'
import images from "../images/works.json"
import { Titulo } from '../styled/mainStyled'

console.log(images)
 const Works = () => {
  return (
    <S.DivWorks>
      <S.InfoWorks>
        <Titulo fontS="2rem">Recent NFT</Titulo>
        <S.SpanInfo left="90%">VIEW MORE</S.SpanInfo>
      </S.InfoWorks>

      <S.DivWorksphotos>

        {images.map(({src,alt})=> (
          <S.PhotoInfo 
          key={alt}>
            <img src={src} alt={alt} />
            <S.InInfo> </S.InInfo>

          </S.PhotoInfo>
        ))}
      
      
      
      
        {/* <S.PhotoInfo>
        </S.PhotoInfo> */}


      </S.DivWorksphotos>



    </S.DivWorks>


  )
}

export {
  Works
}