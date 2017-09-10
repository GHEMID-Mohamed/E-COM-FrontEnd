import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import FormSearch from '../components/FormSearch'
import '../containers/Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <Row>
                    <Col md="2"></Col>
                    <Col md="10">
                        <Nav>
                            <NavItem>
                                <NavLink disabled href="#">© 2017 Pyramide. Inc.</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Termes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Confidentialité</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Securité</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Status</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled href="#">Help</NavLink>
                            </NavItem>
                        </Nav>
                       
                    </Col>
                </Row>
            </div>
        );
    }
}

