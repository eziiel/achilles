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
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media(max-width:900px){
    display: none;
  }
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
const DropMenu = styled.button`
  width: 50px;
  height: 50px;
  margin-left:10px;
  position: relative;
  border: none;
  border-radius: 5px;
  background: var(--blue-linear);
  background: transparent;
  cursor: pointer;
  display: none;

  @media(max-width:900px) {
    display: block;
  }
  

  span{
    cursor: pointer;
    content: "";
    position: absolute;
    width: 70%;
    height: 3px;
    border-radius: 5px;
    left: 15%;
    background: var(--golder2);
    
    ::before{
      position: absolute;
      content: "";
      border-radius: 5px;
      width: 60%;
      height: 3px;
      left: 0;
      top:-10px;
      background: var(--golder2);
    };
    
    :after{
      content: "";
      position: absolute;
      width: 40%;
      height: 3px;
      top:10px;
      left: 0;
      border-radius: 5px;
      background: var(--golder2);
    }

  }
  ul{
    position: absolute;
    background: linear-gradient(170deg, #08131e,rgb(9, 12, 16) 60%, #030304d6 80%, #0304067e 95%, rgba(0,0,0,0) 100%);
    top: 50px;
    right: 0;
    padding: .5rem 1.5rem;
    display: none;

    ${props => props.theme==true && css`
      background: #fff;
      color: var(--dark-blue);
    `}

    ${props => props.statusDrop==true && css`
      display: block;
    `}

    ::before{
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      background: red;
      background: linear-gradient(135deg,  #BF841A , #e6a22389, #e6a22334,#efb24016);
      top: 0;
      left: 0;
      z-index: 1;
    }
    ::after{
      position: absolute;
      content: "";
      width: 2px;
      height: 80%;
      background: linear-gradient(135deg,  #BF841A , #e6a22389, #e6a22334,#efb24016);
      top: 0;
      left: 0;

    }
    li{
      margin: 1rem 0;
      text-align: start;
      a{
        color: #fff;
        padding: 1rem;

        ${props => props.theme==true && css`
          color: var(--dark-blue);
        `}
      }

    }
  }



`




export {
  HeaderNav,
  NavMenu,
  Logo,
  Li,
  Ul,
  LogoImg,
  DropMenu
}