import { createGlobalStyle } from "styled-components";

function pixelsToRem(...values) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

const GlobalStyled = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  img{
    max-width: 100%;
    display: block;
  }




  :root {
    //collors
    --bg:#050607;
    --dark-blue: #0A0D11;

    //golders
    --golder1 : linear-gradient(90deg, #F4CD68, #000);
    
    //others
    --blue-linear : linear-gradient(50deg,#0A0D11 75%, #111822, #121f30 );
    --blue-linear2 : linear-gradient(30deg,#050607 75%, #0a152280, #070c1211 );
    
    //texts
    --font1: 700 ${pixelsToRem(48)}/${pixelsToRem(
  48,
)} 'Cinzel', cursive;
    --font2: 300 ${pixelsToRem(22)}/${pixelsToRem(48,
)} 'Source Sans Pro', sans-serif;


  }


  body {
    background: var(--bg);
    font-family: 'Cinzel', cursive;
    height: 2500px;
  }

`

export { GlobalStyled };
