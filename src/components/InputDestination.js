import React, { Component } from 'react';
import { Button } from 'reactstrap'
import '../components/InputDestination.css'

export default  class InputDestination extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
  
    render() {
      return (
            <input type="text" value={this.state.value} onChange={this.handleChange}
            placeholder="Entrez votre destination ! " className="InputDestination" />
      );
    }
  }
