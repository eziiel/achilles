import React from 'react'
import {GlobalStyled} from "../styled/globalStyled"
import { Nav } from './nav'
import { Works } from './works'
import { MainPage } from './main'
import { Contribuition } from './contribuition'
import { Footer } from './footer'
import { ContextTheme } from '../contextTheme'


export const MainHome = () => {
  const {statusTheme} = React.useContext(ContextTheme)



    return (
      <>
          <GlobalStyled theme={statusTheme}/>
          <Nav/>
          <MainPage/>
          <Works/>
          <Contribuition/>
          <Footer />
      </>
    )
}
