import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '@fortawesome/fontawesome-free-solid'

import HeaderWrapper from './styled/layouts/HeaderWrapper'
import Logo from './styled/Logo'
import Hamburger from './styled/Hamburger'
import NavButton from './styled/NavButton'
import Nav from './Nav'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = { ...props, menuOpen: false }
    console.log(this.state)
  }

  onInputClickMenu = e => {
    this.setState = { menuOpen: !this.state.menuOpen }
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Hamburger htmlFor="show-menu">
          {this.state.menuOpen ? (
            <FontAwesomeIcon icon={faWindowClose} size="lg" pull="right" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="lg" pull="right" />
          )}
        </Hamburger>
        <NavButton
          type="checkbox"
          id="show-menu"
          onChange={() => this.setState({ menuOpen: !this.state.menuOpen })}
        />
        <Nav showAuth={this.state.showAuth} />
      </HeaderWrapper>
    )
  }
}

export default Header
