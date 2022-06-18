import { HeaderNav, NavMenu, Logo, Li, Ul, LogoImg, DropMenu } from "../styled/navMenu.Styled.jsx";

import { ButtonTheme } from "../styled/buttonsStyled";
import React from "react";
import { ContextTheme } from "../contextTheme";
import accessNavItems from './utils/nav.json'

const Nav = () => {
  const {statusTheme,setStatusTheme} = React.useContext(ContextTheme)
  const [statusDrop, setStatusDrop] = React.useState(false)

  const handleTheme = () => {
    setStatusTheme(!statusTheme)
  }
  
  const handleDrop = () => {
    setStatusDrop(!statusDrop)
  }

  return (
    <>
      <HeaderNav theme={statusTheme}>
        <Logo theme={statusTheme}>
          <LogoImg theme={statusTheme}/>
          <h1>ACHILLES</h1>
        </Logo>

        <NavMenu>
          <Ul>
            {accessNavItems.map(({accessNav}) => (
              <Li 
              theme = {statusTheme}
              key={accessNav}>
                <a 
                href="#">{accessNav}</a>
              </Li>
            ))}
          </Ul>

            <DropMenu
            ref={dropMenuRef}
            onClick={handleDrop}
            statusDrop={statusDrop}
            theme={statusTheme}>
              <span></span>
              <ul>
                {accessNavItems.map(({accessNav,id}) => (
                  <li
                  key={id}>
                    <a 
                    href="#">{accessNav}</a>
                  </li>
                ))}
              </ul>
            </DropMenu>


          <ButtonTheme 
            theme = {statusTheme}
            onClick={handleTheme}
          />
        </NavMenu>
      </HeaderNav>
    </>
  );
};

export { Nav };
