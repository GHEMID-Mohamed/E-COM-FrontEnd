import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import '../components/InputResult.css'



export default class InputSignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            value: this.props.value
         }

         this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.listenOnCLick(this.state.value)
    }


    render() {

        return (
            <p onClick={this.handleClick} className="search_auto_element">{this.props.value}</p>
        );
    }
}