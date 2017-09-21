import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Container } from 'reactstrap'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <HomePage></HomePage>
        </Container>
        
      </div>
    );
  }
}

export default App;
