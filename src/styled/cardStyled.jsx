import styled from "styled-components"

const ContriStyled = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media(max-width:1200px){
    max-width: 900px;
  }

`
const InfoContri = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  align-items: center;
  justify-content: start;
  position: relative;
  padding: 0 2rem;
  
  @media(max-width:1200px){
    gap: 2rem !important;
    justify-content: end;
    font-size: .875rem;
  };
  @media(max-width:1200px){
    gap: 2rem !important;
    justify-content: start;
    font-size: .875rem;
  };
`

const CardItens = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 435px;
  padding: 0 2rem;
  
  @media(max-width:1200px){
    width: 100%;
    height: 280px;
  }
  @media(max-width:900px){
    width: 80%;
    height: 280px;
  }
  @media(max-width:500px){
    width: 80%;
    height: 280px;
  }

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


  @media(max-width:1200px){
    height: 280px;
  }

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
  
  @media(max-width:1200px){
    font-size: 1.5rem;
  }
  @media(max-width:900px){
    font-size: 1rem;
  }
  @media(max-width:500px){
    font-size: .875rem;
  }
`

export {
  ContriStyled,
  InfoContri,
  CardItens,
  infoItens,
  imgItem,
  P
}
