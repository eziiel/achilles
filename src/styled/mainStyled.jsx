import styled, { css } from "styled-components";
import fotoBGDark from "../../public/images/foto-main-dark.png";
import fotoBGLight from "../../public/images/foto-main-light.png";



function pixelsToRem(...values) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

const Main = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding-top: ${pixelsToRem(2)};
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  background: var(--blue-linear2)
  
  ${props => props.theme && css`
    background: var(--light);
  `};
  
  @media(max-width:1200px){
    grid-template-columns: 1fr;
    max-width: 900px;
  }
  @media(max-width:900px){
    grid-template-columns: 1fr;
    max-width: 600px;
  }
  @media(max-width:500px){
    grid-template-columns: 1fr;
    max-width: 300px;
  }
  
  `;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media(max-width:1200px){
    align-items: center;
  }
  @media(max-width:900px){
    grid-template-columns: 1fr;
    max-width: 600px;
  }
  @media(max-width:500px){
    grid-template-columns: 1fr;
    max-width: 300px;
  }
`;

const Titulo = styled.div`
  background: linear-gradient(to bottom, #ffe5a1, #bf841a, #ffcd74);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: var(--font1);
  padding: 1rem 0;

  @media(max-width:1200px){
    font-size: ${pixelsToRem(32)};
    text-align: center;
  }
  @media(max-width:900px){
    font-size: ${pixelsToRem(24)};
    text-align: center;
  }
  @media(max-width:500px){
    font-size: ${pixelsToRem(16)};
    text-align: center;
  }
  h1 {
    font-size: ${pixelsToRem(48)};
    
    @media(max-width:1200px){
      font-size:1.5rem;
      text-align: center;
    }
  }
  span {
    display: block;
    text-transform: uppercase;
    letter-spacing: 1rem;
    font-size: 4.2rem;
    line-height: 1.5;

    @media(max-width:1200px){
      font-size: 2.5rem;
      text-align: center;
    }
  }
    `;

const P1 = styled.p`
  color: #fff;
  font: var(--font2);
  ${props => props.theme == true && css`
  color: var(--dark-blue);
  font-weight: 700;
  `};
  
  @media(max-width:1200px){
      text-align: center;
  }
  @media(max-width:900px){
      font-size: 1.5rem;
      text-align: center;
  }
  @media(max-width:500px){
    font-size: 1rem;
    text-align: center;
  }
`;

const ButtonsDiv = styled.div`
  padding: ${pixelsToRem(32)} ${pixelsToRem(0)};
  display: flex;
  gap: 5rem;
`;

const ImgMain = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: transparent url(${fotoBGDark}) center no-repeat;
  background-position: center;
  background-size: cover;
  
  ${props => props.theme == true && css`
    background: transparent url(${fotoBGLight})  center no-repeat;
    background-position: center;
    background-size: cover;
  `};
      
  @media(max-width:1200px){
      width: 535px;
      height: 417px;
  }
  @media(max-width:950px){
      width: 373px;
      height: 290px;
  }
  @media(max-width:500px){
      width: 250px;
      height: 193px;
  }
  `;

export { Main, Section, Titulo, P1, ButtonsDiv, ImgMain };
