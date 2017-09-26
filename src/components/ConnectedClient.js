import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class ConnectedClient extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };

        this.handleClick = this.handleClick.bind(this)

    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    handleClick() {
        this.props.listenToDeconnexionProp()
    }

    

    render() {
        return (
            <div>
                <Row>
                    <Col md="1">
                        <img src="http://wfarm1.dataknet.com/static/resources/icons/set113/91f685ca.png" height="30" width="30" />
                    </Col>
                    <Col md="3"><p> {this.props.nomProp} &nbsp; {this.props.prenomProp}</p></Col>
                    <Col md="8">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                            <DropdownToggle caret>
                                <img src="http://www.freeiconspng.com/uploads/menu-icon-13.png"
                                    height="20" width="20" />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Paramètres</DropdownItem>
                               <DropdownItem><Link to="/mesReservations">Mes reservations</Link></DropdownItem>
                                <DropdownItem onClick={this.handleClick}>Déconnecter</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        );
    }
}

