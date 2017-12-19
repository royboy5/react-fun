import styled from 'styled-components'

const NavButton = styled.input`
  display: none;

  &:checked ~ nav {
    display: block;
  }
`

export default NavButton
