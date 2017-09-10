import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Container } from 'reactstrap'
import Header from './containers/Header'
import Body from './containers/Body'
import Footer from './containers/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header></Header>
          <Body></Body>
          <Footer></Footer>
        </Container>
      </div>
    );
  }
}

export default App;
