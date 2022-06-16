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
  ${props => props.theme == true && css`
    color: var(--dark);
  `}
  `
const FooterSocial =styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 5rem 0;
`


export {
  FooterA,
  FooterP,
  FooterSocial,

}