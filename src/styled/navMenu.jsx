import styled, { css } from "styled-components"
import logoLight from "../images/logo-light.svg"
import logoDark from "../images/logo-dark.svg"


const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--blue-linear);
  border-bottom: 1px solid #fff;
  padding: 1rem;
  
  ${props => props.theme == true && css`
    background:  var(--light);
    border-bottom: 1px solid var(--dark-blue);
  `}
`
const NavMenu = styled.nav`
  display: flex;
  align-items: center;
`

const Logo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;

  ${props => props.theme == true && css`
      color:  var(--dark-blue);
  `}
`
const LogoImg = styled.div`
  width: 50px;
  height: 50px;
  background: transparent url(${logoLight}) center no-repeat;
  ${props => props.theme == true && css`
      background: transparent url(${logoDark}) center no-repeat;
  `}
`

const Li = styled.li`
  padding:.5rem 1rem;
  
  a{
    color: #fff;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
  ${props => props.theme == true && css`
    a{
      color: var(--dark-blue);
    }
`}
`
const Ul = styled.div`
  display: flex;
`

export {
  HeaderNav,
  NavMenu,
  Logo,
  Li,
  Ul,
  LogoImg,


}