/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import InputSignIn from '../components/InputSignIn'
import ConnectedClient from '../components/ConnectedClient'

export default class ModalExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            connectionState: false,
            nom: '',
            prenom: ''
        };

        this.toggle = this.toggle.bind(this);
        this.getStateConnection = this.getStateConnection.bind(this)
        this.listenToDeconnexion = this.listenToDeconnexion.bind(this)
        
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    getStateConnection(state, nomParam, prenomParam) {
        this.setState({
            connectionState: state,
            nom: nomParam,
            prenom: prenomParam
        })

        this.props.getStateConnexionProps(state)

    }

    listenToDeconnexion(state) {
        this.setState({
            connectionState: state,
            modal: false
        })

        this.props.getStateConnexionProps(state)
    }


    render() {
        if (!this.state.connectionState)
            return (
                <div>
                    <Row>
                        <Col md="10"></Col>
                        <Col md="2">
                            <Button color="primary" onClick={this.toggle}>
                                {this.props.buttonLabel}
                                <img src="http://www.moellermatthews.ca/wp-content/themes/moellermatthews/images/placeholder-profile.png" height="20" width="20" />
                                Mon compte
                        </Button>
                        </Col>

                    </Row>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Connectez vous à votre compte</ModalHeader>
                        <ModalBody>
                            <InputSignIn getStateConnectionProp={this.getStateConnection}></InputSignIn>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

                </div>
            )
        else
            return (
                <div>
                    <Row>
                        <Col md="8"></Col>
                        <Col md="4"><ConnectedClient listenToDeconnexionProp={this.listenToDeconnexion}
                            nomProp={this.state.nom}
                            prenomProp={this.state.prenom} >
                        </ConnectedClient></Col>
                    </Row>
                </div>
            )
    }
}
