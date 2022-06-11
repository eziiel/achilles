import styled from "styled-components"

const DivWorks = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const DivWorksphotos = styled.div`
  display: flex;
  overflow: hidden;
  /* overflow-x: scroll; */
  gap: 2rem;
  /* width: 1500px; */

 
`
const InfoWorks = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2rem;
  position: relative;
`
const TitleInfo = styled.h1`
  background: linear-gradient(to bottom, #ffe5a1, #bf841a, #ffcd74);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const SpanInfo = styled.span`
  color: #fff;
  ::before{
    position: absolute;
    content: "";
    top: 40px;
    left: 90%;
    width: 3px;
    height: 35px;
    border-radius: 20%;
    background: radial-gradient(#FFE5A1, #75510e,#0A0D11);
    box-shadow: inset 2px 2px 3px #0A0D11;
  }
`
const PhotoInfo = styled.div`
  flex-shrink: 0;
  max-width: 30%;
`
const InInfo = styled.span`

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



