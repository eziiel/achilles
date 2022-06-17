import styled, { css } from "styled-components";


const FooterA = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  `
const FooterP = styled.p`
  color: #fff;
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 600;
  text-align: center;
  ${props => props.theme == true && css`
  color: var(--dark);
  `};
  
  @media(max-width:1200px){
    font-size: 1.5rem;
  }
  @media(max-width:900px){
    font-size: 1rem;
    max-width:20ch;
  }
  `
const FooterSocial =styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 5rem 0;
  
  @media(max-width:500px){
    gap: 1rem;
  }
`


export {
  FooterA,
  FooterP,
  FooterSocial,

}