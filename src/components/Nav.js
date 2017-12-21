import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.nav`
  opacity: 0;
  width: 100%;
  position: relative;
  transition: 0.5s;
  background-color: black;
  z-index: 1000;

  @media (min-width: 769px) {
    opacity: 1;
    width: auto;
    transition: 0s;
  }
`

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  position: absolute;
  overflow: none;
  width: 100%;

  @media (min-width: 769px) {
    position: relative;
  }
`

const NavItem = styled.li`
  text-align: center;
  padding: 10px 0;
  margin-bottom: 1px;
  background-color: #000;
  color: #fff;
  transition: 0.5s;

  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }

  @media (min-width: 769px) {
    min-width: 100px;
    float: left;
    transition: 0s;
    margin-bottom: 0;
    background-color: #fff;
    color: #000;
  }
`

const Nav = props => {
  return (
    <NavContainer>
      <NavList>
        <NavItem onClick={props.showAuth}>Sign up</NavItem>
      </NavList>
    </NavContainer>
  )
}

export default Nav
