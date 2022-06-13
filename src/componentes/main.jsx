import React from "react";
import { ButtonsDiv, ImgMain, P1, Section, Titulo } from "../styled/mainStyled";
import { Main } from "../styled/mainStyled";
import { Button } from "./utils/button";
// import fotoBg from "../../images/foto-main-dark.svg"

export const MainPage = () => {
  return (
    <Main>
      <Section>
        <Titulo>
          <h1>Yet the story of</h1>
          <span>Orpheus</span>
        </Titulo>
        <P1>
        Product & Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.
        </P1>

        <ButtonsDiv>
            <Button 
            padding=".8rem 2rem"
            background = "#0A0D11"
            before
            color = "#FFCD74"
            title="Works">
            </Button>
            <Button 
            background="linear-gradient(to left, #FFE5A1, #BF841A, #FFCD74)"
            padding=".5rem 1.2rem"
            color = "#0A0D11"
            boderR = "5px"
            title='Free stuff'></Button>
        </ButtonsDiv>

      </Section>



      <ImgMain/>


    </Main>
  );
};
