import React from 'react'

import styled from 'styled-components'

const NavContainer = styled.nav`
  display: none;
  width: 100%;
  position: relative;
`

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  position: absolute;
  overflow: none;
  width: 100%;
`

const NavItem = styled.li`
  text-align: center;
  padding: 10px 0;
  margin-bottom: 1px;
  background-color: #000;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`

const Nav = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
      </NavList>
    </NavContainer>
  )
}

export default Nav
