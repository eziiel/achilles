import styled, { css } from "styled-components";
import fotoBGDark from "../images/foto-main-dark.png";
import fotoBGLight from "../images/foto-main-light.png";



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
  `}

`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Titulo = styled.div`
  background: linear-gradient(to bottom, #ffe5a1, #bf841a, #ffcd74);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: var(--font1);
  font-size: ${props => props.fontS};
  padding: 2rem 0;

  

  h1 {
    font-size: ${pixelsToRem(48)};
  }
  span {
    display: block;
    text-transform: uppercase;
    letter-spacing: 1rem;
    font-size: 4.2rem;
    line-height: 1.5;
  }
`;

const P1 = styled.p`
  color: #fff;
  font: var(--font2);
  ${props => props.theme == true && css`
    color: var(--dark-blue);
    font-weight: 700;
  `}
`;

const ButtonsDiv = styled.div`
  padding: ${pixelsToRem(32)} ${pixelsToRem(0)};
  display: flex;
  gap: 5rem;
`;

const ImgMain = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background: transparent url(${fotoBGDark}) center no-repeat;
  background-position: center;
  background-size: cover;
    
    ${props => props.theme == true && css`
      background: transparent url(${fotoBGLight})  center no-repeat;
    `}

  `;

export { Main, Section, Titulo, P1, ButtonsDiv, ImgMain };
