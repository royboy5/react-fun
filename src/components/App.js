import React, { Component } from 'react'

import Wrapper from './styled/layouts/Wrapper'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <Wrapper>
        <Header />
        <main>
          <p>Some content</p>
        </main>
        <Footer />
      </Wrapper>
    )
  }
}

export default App
