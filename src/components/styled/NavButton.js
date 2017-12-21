import styled from 'styled-components'

const NavButton = styled.input`
  display: none;

  &:checked ~ nav {
    opacity: 1;
  }
`

export default NavButton
