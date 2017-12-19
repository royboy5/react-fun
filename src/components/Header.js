import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

import HeaderWrapper from './styled/layouts/HeaderWrapper'
import Logo from './styled/Logo'
import Hamburger from './styled/Hamburger'
import NavButton from './styled/NavButton'
import Nav from './Nav'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Hamburger htmlFor='show-menu'>
        <FontAwesomeIcon icon={faBars} size='lg' pull='right' />
      </Hamburger>
      <NavButton type='checkbox' id='show-menu' />
      <Nav />
    </HeaderWrapper>
  )
}

export default Header
