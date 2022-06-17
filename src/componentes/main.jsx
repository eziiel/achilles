import React from "react";
import { ContextTheme } from "../contextTheme";
import { ButtonsDiv, ImgMain, P1, Section, Titulo } from "../styled/mainStyled";
import { Main } from "../styled/mainStyled";
import { Button } from "./utils/button";

export const MainPage = () => {
  const {statusTheme} = React.useContext(ContextTheme)


  return (
    <Main
     theme={statusTheme}>
      <Section>
        <Titulo>
          <h1>Yet the story of</h1>
          <span>ACHILLES</span>
        </Titulo>
        <P1 theme={statusTheme}>
        Product & Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.
        </P1>

        <ButtonsDiv>
            <Button
            theme={statusTheme} 
            padding=".8rem 2rem"
            background = "#050607"
            before
            color = "#FFCD74"
            title="Works">
            </Button>
            <Button
            background="linear-gradient(45deg, #FFE5A1, #dc9915 50%, #FFCD74)"
            padding=".5rem 1.2rem"
            color = "#0A0D11"
            boderR = "5px"
            title='Free stuff'></Button>
        </ButtonsDiv>

      </Section>

          <ImgMain theme={statusTheme} />

    </Main>
  );
};
