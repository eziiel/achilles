import styled from "styled-components"



const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--blue-linear);
  border-bottom: 1px solid #fff;
  padding: 1rem;
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
`

const Li = styled.div`
  padding:.5rem 1rem;
  
  a{
    color: #fff;
  }
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



}