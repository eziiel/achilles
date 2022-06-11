import React from 'react'
import {GlobalStyled} from "../styled/globalStyled"
import { MainPage } from './utils/main'
import { Nav } from './utils/nav'
import { Works } from './utils/works'


export const MainHome = () => {
    return (
      <>
        <GlobalStyled />
        <Nav/>
        <MainPage/>
        <Works/>
      </>
    )
}
