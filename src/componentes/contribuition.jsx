import  * as S  from "../styled/cardStyled"
import { Titulo } from "../styled/mainStyled"
import { SpanInfo } from "../styled/worksStyled"
import { Card } from "./utils/card"



function Contribuition () {


  return(
    <S.ContriStyled>

      <S.InfoContri>
        <Titulo>Contribuition</Titulo>
        <SpanInfo left="77%" >View More</SpanInfo>
      </S.InfoContri>

                  <Card 
                  padding="2rem 5rem"
                  bgc="linear-gradient(to left, #fff,#07090C)"
                  rightItem="0"
                  fontT="1.5rem"
                  info="3d greek statue pack"
                  title="over 200 greek style aculputure"
                  button="Download"></Card>





    </S.ContriStyled>
  )
}

export {
  Contribuition
}