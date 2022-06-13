import styled, { css } from "styled-components"
import ContriStatue from "../images/contriSaint.png"


const ContriStyled = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
`

const InfoContri = styled.div`
  display: flex;
  gap: 4rem;
  align-self: start;
  align-items: center;
  justify-content: start;
  position: relative;
`

const CardItens = styled.div`
  position: relative;
  width: 100%;
  height: 435px;
  display: grid;
  justify-content: start;
  grid-template-columns: repeat(2,1fr);


  ${props => props.left == "true" && css`
    background: linear-gradient(to left, #fff, #07090C, #000 , #000 80%);
    background: linear-gradient(to left, #07090C, #000, #07090C);
  `}
  ${props => props.right == "true" && css`
    background: linear-gradient(to right, #07090C, #000 , #000 80%);
  `}
`

const infoItens = styled.div`
  position: absolute;
  left: ${props=>props.left};
  right: ${props=>props.right};
  padding:${props=>props.padding};
  background:${props=>props.bgc};
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
const imgItem = styled.div`
  /* max-width: 100%; */
  display: block;
  background: transparent url(${ContriStatue}) center no-repeat;
`
const P = styled.p`
  color: #fff;
  font-size: 2rem;
  max-width: 20ch;
  text-align: center;
`



export {
  ContriStyled,
  InfoContri,
  CardItens,
  infoItens,
  imgItem,
  P
}
