import styled, { css } from "styled-components"


function pixelsToRem(...values) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}


const DivWorks = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;

  @media(max-width:1200px){
    max-width: 900px;
  };
  
  @media(max-width:930px){
    max-width: 700px;
  }
  @media(max-width:500px){
    max-width: 300px;
  }
`

const DivWorksphotos = styled.div.attrs(props => ({
  style: {
    transform: props.move
  },
}))`
  display: flex;
  gap: 2rem;
  cursor: pointer;
`

const InfoWorks = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 3rem;
  position: relative;
  padding: 0 2rem;
  
  @media(max-width:950px){
    justify-content: end;
    align-items: center;
  };
`
const TitleInfo = styled.h1`
  background: linear-gradient(to bottom, #ffe5a1, #bf841a, #ffcd74);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const SpanInfo = styled.span`
  cursor: pointer;
  color: #fff;
  font-weight:650 ;
  position: relative;

  @media(max-width:1200px){
    font-size: .875rem;
    text-align: center;
  };

${props => props.theme == true && css`
  color: var(--dark-blue);
`}
  ::before{
    position: absolute;
    content: "";
    top: -10px;
    left: -25%;
    width: 3px;
    height: 35px;
    border-radius: 20%;
    background: radial-gradient(#FFE5A1, #75510e64,#0a0d1129);
    box-shadow: inset 2px 2px 3px #0a0d1122;
    
    
    ${props => props.theme == true && css`
    background: radial-gradient(#f6b81b, #71592dc9,#d5e1f229, transparent);
    box-shadow: inset 2px 2px 3px #f7f5efd7 ;
  `}
  }
`
const PhotoInfo = styled.div`
  flex-shrink: 0;
  max-width: 25%;
  position: relative;

  @media(max-width:930px){
    max-width: 40%;
  }
  @media(max-width:930px){
    max-width: 30%;
  }

`
const InInfo = styled.span`
  background: rgba(0,0,0,.5);
  color: #fff;
  position: absolute;
  z-index: 1;
  bottom: 0;
  padding: 1rem;
  font-size: .875rem;
  
  @media(max-width:1200px){
    padding: .5rem;
    font-size: .875rem;
  }
  @media(max-width:900px){
    padding: .2rem;
    font-size: 1rem;
  }
  @media(max-width:500px){
    padding: .2rem;
    font-size: .5rem;
  }
`

  export {
    DivWorks,
    DivWorksphotos,
    InfoWorks,
    TitleInfo,
    SpanInfo,
    PhotoInfo,
    InInfo,

  }



