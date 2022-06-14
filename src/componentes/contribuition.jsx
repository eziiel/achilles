import  * as S  from "../styled/cardStyled"
import { Titulo } from "../styled/mainStyled"
import { SpanInfo } from "../styled/worksStyled"
import { Card } from "./utils/card"
//images
import statueCon from "../images/statueCon.png"
import statuesCon from "../images/statuesCon.png"



function Contribuition () {


  return(
    <S.ContriStyled>

      <S.InfoContri>
        <Titulo>Contribuition</Titulo>
        <SpanInfo left="77%" >View More</SpanInfo>
      </S.InfoContri>

                <Card 
                img={statueCon}
                imgLeft="0"
                // imgRight="0"
                padding="2rem 5rem"
                bgc="linear-gradient(to left, #08131e,#07090C, transparent)"
                rightItem="0"
                fontT="1.5rem"
                title="over 200 greek style aculputure"
                info="3d greek statue pack"
                button="Download"></Card>
              
                
                
                <Card 
                img={statuesCon}
                imgRight="0"
                // imgRight="0"
                widthitem="60%"
                padding="2rem 0rem"
                bgc="linear-gradient(90deg, #08131e,rgb(9, 12, 16) 60%, #030304d6 80%, #0304067e 95%, rgba(0,0,0,0) 100%)"
                leftItem="0"
                fontT="1.5rem"
                title="greek statue avatars"
                info="+500 greek style user avatars"
                button="Download"></Card>


                

    </S.ContriStyled>
  )
}

export {
  Contribuition
}