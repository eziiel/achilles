import styled from "styled-components";
import fotoBG from "../images/foto-main-dark.svg";

function pixelsToRem(...values) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

const Main = styled.main`
  max-width: 950px;
  margin: 0 auto;
  padding-top: ${pixelsToRem(2)};
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  justify-content: center;

  margin-bottom: 5rem;
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
  /* color: black; */
  font: var(--font1);
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
`;

const ButtonsDiv = styled.div`
  padding: ${pixelsToRem(32)} ${pixelsToRem(0)};
  display: flex;
  gap: 5rem;
`;

const ImgMain = styled.img`
  display: block;
  /* padding: 1rem; */
  width: 100%;
  height: 100%;
  /* background: red; */
  /* background: url(${fotoBG}) center no-repeat; */
  /* background-position: center; */
  /* background-size: cover; */
`;

export { Main, Section, Titulo, P1, ButtonsDiv, ImgMain };
