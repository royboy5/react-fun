import styled from 'styled-components'

const Hamburger = styled.label`
  padding: 0;
  margin: 0;
  z-index: 1000;

  @media (min-width: 769px) {
    display: none;
  }
`

export default Hamburger
