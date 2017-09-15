/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col,
    ListGroup, ListGroupItem
} from 'reactstrap';

export default class MesReservation extends Component {


    render() {
        return (
            <div>
                <h7>Mes reservations</h7>
                <hr />
                <ListGroup>
                    <ListGroupItem>
                        <Row>
                            <Col md="9">Reservation num : </Col>
                            <Col md="3">
                                <Button color="danger">Annuler</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col md="9">Reservation num : </Col>
                            <Col md="3">
                                <Button color="danger">Annuler</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>

                </ListGroup>
            </div>
        );
    }
}
