import React from 'react'
import styled from 'styled-components'

const AuthWrapper = styled.div`
  position: absolute;
  top: 0;
  right: ${props => (props.show ? '0' : '-1000px')};
  transition: 1s;
  height: 100vh;
  width: 100vh;
  background-color: blue;
  opacity: 0.5;
`

const Auth = props => {
  return <AuthWrapper show={props.show}>Auth</AuthWrapper>
}

export default Auth
