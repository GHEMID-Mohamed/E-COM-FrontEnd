import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'
import ButtonClient from '../components/ButtonClient'
import NavBar from '../components/NavBar'


export default class Header extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md="9"></Col>
                    <Col md="3"><ButtonClient></ButtonClient></Col>
                </Row>
                <Row>
                    <Col md="2"><img src="https://capitolcopyprintmedia.files.wordpress.com/2013/09/mc9102163421.png" height="100" width="120"/></Col>
                    <Col md="10"> <NavBar></NavBar> </Col>
                </Row>

            </div>
        );
    }
}

