import React from 'react'
import {GlobalStyled} from "../styled/globalStyled"
import { Nav } from './nav'
import { Works } from './works'
import { MainPage } from './main'
import { Contribuition } from './contribuition'
import { Footer } from './footer'


export const MainHome = () => {
    return (
      <>
        <GlobalStyled />
        <Nav/>
        <MainPage/>
        <Works/>
        <Contribuition/>
        <Footer />
      </>
    )
}
