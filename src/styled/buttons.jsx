import styled, { css } from "styled-components"
import sun from "../images/sun.svg"

const ButtonTheme = styled.button`
  width: 50px;
  height: 50px;
  background: transparent url(${sun}) center no-repeat;
  border: none;
  cursor: pointer;  
  `

  const ButtonUtil = styled.button`
    border-radius: ${props => props.boderR};
    border: none;
    width: ${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.padding};
    background: ${props => props.background};
    color: ${props => props.color};
    position: relative;
    cursor: pointer;
    font-weight: 500;
    text-transform: uppercase;
    
    ${props => props.before && css`
    ::before {
      content: "";
      top: 0;
      left: 2px;
      width: 2px;
      height: 100%;
      background: linear-gradient(135deg, #BF841A , #0A0D11);;
      position: absolute;
    }
    ::after {
      content: "";
      top: 0;
      left: 2px;
      width: 100%;
      height: 2px;
      background: linear-gradient(135deg, #BF841A , #0A0D11 );;
      position: absolute;
    }
    span{
      position: relative;
       ::before {
      content: "";
      top: 0;
      left: 2px;
      width: 1px;
      height: 120%;
      background: linear-gradient(135deg, #BF841A , #000 );
      background: red
      position: absolute;
    }
    }
    `}
  `




export {
  ButtonTheme,
  ButtonUtil,

}