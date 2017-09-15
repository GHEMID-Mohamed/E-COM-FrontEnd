import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import ButtonClient from '../components/ButtonClient'
import NavBar from '../components/NavBar'
import SignInWindow from '../components/SignInWindow'


export default class Header extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col><SignInWindow></SignInWindow></Col>
                </Row>
                <Row>
                    <Col md="2">
                        <Link to="/">
                            <img src="https://capitolcopyprintmedia.files.wordpress.com/2013/09/mc9102163421.png" height="100" width="120" />
                        </Link>
                    </Col>
                    <Col md="10"> <NavBar></NavBar> </Col>
                </Row>

            </div>
        );
    }
}

