import styled, { css } from "styled-components"


const ContriStyled = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
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
  color: rgb(8, 19, 30);
`

const CardItens = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 435px;
  /* display: grid; */
  /* justify-content: start; */
  /* grid-template-columns: repeat(2,1fr); */

`

const infoItens = styled.div`
  position: absolute;
  width: ${props=>props.widthitem};
  grid-column: ${props=>props.gridcolum};
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
  /* gap: 1rem; */
  /* color: rgb(8, 19, 30); */
  `
const imgItem = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  left: ${props=>props.imgLeft};
  right: ${props=>props.imgRight};
  display: block;
  background: transparent;
  background-image: url(${props=>props.imgBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const P = styled.p`
  max-width: 10ch;
  color: #fff;
  font-size: 2rem;
  max-width: 20ch;
  text-align: center;
  letter-spacing: 3px;
`



export {
  ContriStyled,
  InfoContri,
  CardItens,
  infoItens,
  imgItem,
  P
}
