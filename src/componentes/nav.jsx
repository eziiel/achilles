import { HeaderNav, NavMenu, Logo, Li, Ul } from "../styled/navMenu";

import logo from "../images/logo.svg";
import { ButtonTheme } from "../styled/buttons";

const Nav = () => {
  return (
    <>
      <HeaderNav>
        <Logo>
          <img src={logo} alt="logo-achilles" />
          <h1>ORPHEUS</h1>
        </Logo>

        <NavMenu>
          <Ul>
            <Li>
              <a href="#">Works</a>
            </Li>
            <Li>
              <a href="#">Contribution</a>
            </Li>
            <Li>
              <a href="#">Community</a>
            </Li>
            <Li>
              <a href="#">Get in Touch</a>
            </Li>
          </Ul>

          <ButtonTheme />
        </NavMenu>
      </HeaderNav>
    </>
  );
};

export { Nav };
