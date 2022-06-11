import styled from "styled-components"

const DivWorks = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const DivWorksphotos = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 5rem;

  img{
    width: 300px;
    display: block;
  }
`
const InfoWorks = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5rem;
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
    background: radial-gradient(#FFE5A1, #75510e,#000);
    box-shadow: inset 1px 1px 3px #000;
  }
`
const PhotoInfo = styled.div`

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



