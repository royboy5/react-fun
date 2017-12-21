import React, { Component } from 'react'

import Wrapper from './styled/layouts/Wrapper'
import Header from './Header'
import Footer from './Footer'
import Auth from './Auth'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { showAuthForm: true }
  }
  onClickSignup = () => {
    this.setState({ showAuthForm: !this.state.showAuthForm })
    console.log(this.state.showAuthForm)
  }

  render() {
    return (
      <Wrapper>
        <Header showAuth={this.onClickSignup} />
        <main>
          <p>Some content</p>
        </main>
        <Auth show={this.state.showAuthForm} />
        <Footer />
      </Wrapper>
    )
  }
}

export default App
