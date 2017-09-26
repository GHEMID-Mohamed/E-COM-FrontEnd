/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col,
    ListGroup, ListGroupItem
} from 'reactstrap';

export default class MesReservation extends Component {


    render() {
        return (

            <ListGroupItem>
                <Row>
                    <Col md="auto">Date Début : <strong>{this.props.dateDebut}</strong></Col>
                    <Col md="auto">Date Fin : <strong>{this.props.dateFin}</strong></Col>
                    <Col md="auto">Numéro chambre : <strong>{this.props.numChambre}</strong></Col>
                    <Col md="auto">Prix : <strong>{this.props.prix}</strong></Col>
                </Row>
                <Row>
                    <Col md="auto">Hotel : <strong>{this.props.nomHotel}</strong></Col>
                    <Col md="auto">Adresse Hotel : <strong>{this.props.adresseHotel}</strong></Col>
                    <Col md="auto">Ville : <strong>{this.props.Ville}</strong></Col>
                </Row>
                <Row>
                    <Col md={{size: 2, push: 11}} >
                        <Button color="danger">Annuler</Button>
                    </Col>
                </Row>

            </ListGroupItem>

        );
    }
}
