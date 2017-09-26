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
                    <Col md="6">Date Début : <strong>{this.props.dateDebut}</strong></Col>
                    <Col md="6">Date Fin : <strong>{this.props.dateFin}</strong></Col>
                </Row>
                <Row>
                    <Col md="auto">Numéro chambre : <strong>{this.props.numChambre}</strong></Col>
                    <Col md="auto">Prix : <strong>{this.props.prix}</strong></Col>
                </Row>
                <Row>
                    <Col md="auto">Hotel : <strong>{this.props.nomHotel}</strong></Col>
                    <Col md="auto">Adresse Hotel : <strong>{this.props.adresseHotel}</strong></Col>
                </Row>
                <Row>
                    <Col md="6">Ville : <strong>{this.props.Ville}</strong></Col>
                    <Col md={{ size: 6, push: 1 }} >
                        <Button color="danger">Annuler</Button>
                    </Col>
                </Row>

            </ListGroupItem >

        );
    }
}
