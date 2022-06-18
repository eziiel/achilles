import styled, { css } from "styled-components"
import sun from "../images/sun.svg"
import moon from "../images/moon.svg"

const ButtonTheme = styled.button`
  width: 40px;
  height: 40px;
  background: transparent url(${sun}) center no-repeat;
  border: none;
  cursor: pointer;  

    ${props => props.theme == true && css`
      background: transparent url(${moon}) center no-repeat;
    `}

  @media(max-width:899px) {
    
  }
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
    font-weight: 700;
    letter-spacing: 1.125px;
    letter-spacing:${props => props.letter};
    text-transform: uppercase;
    margin: ${props => props.margin};
  
  
    
    ${props => props.footer && css`
    
    @media(max-width:500px){
          padding: 1.5rem;
          width:32px;
          height:32px;
        }
    `}


    ${props => props.theme == true && css`
      background: var(--light);
      color: var(--dark-blue);
    `}

    ${props => props.colorTheme == true && css`
      color: var(--light);
    `}

    ${props => props.before && css`
    ::before {
      content: "";
      top: 0;
      left: 2px;
      width: 2px;
      height: 80%;
      background: linear-gradient(135deg,  #BF841A , #e6a22389, #e6a22334);
      position: absolute;
      
    }
    ::after {
      content: "";
      top: 0;
      left: 2px;
      width: 90%;
      height: 2px;
      background: linear-gradient(135deg,  #BF841A , #e6a22389, #e6a22334);
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
      position: absolute;
    }
    }
    `}
  `




export {
  ButtonTheme,
  ButtonUtil,

}