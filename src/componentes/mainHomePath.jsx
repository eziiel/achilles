import React from 'react'
import {GlobalStyled} from "../styled/globalStyled"
import { MainPage } from './utils/main'
import { Nav } from './utils/nav'


export const MainHome = () => {
    return (
      <>
        <GlobalStyled />
        <Nav/>
        <MainPage/>
      </>
    )
}
