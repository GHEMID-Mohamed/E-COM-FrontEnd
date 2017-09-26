/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col,
    ListGroup, ListGroupItem, Table
} from 'reactstrap';

export default class MesReservation extends Component {


    render() {
        return (


            <ListGroupItem>
                <Table>
                    <tbody>
                        <tr>
                            <td>Date Début : </td>
                            <td>{this.props.dateDebut}</td>
                        </tr>
                        <tr>
                            <td>Date Fin :</td>
                            <td>{this.props.dateFin}</td>
                        </tr>
                        <tr>
                            <td>Numéro chambre :</td>
                            <td>{this.props.numChambre}</td>
                        </tr>
                        <tr>
                            <td>Prix :</td>
                            <td>{this.props.prix}</td>
                        </tr>
                        <tr>
                            <td>Hotel :</td>
                            <td>{this.props.nomHotel}</td>
                        </tr>
                        <tr>
                            <td>Adresse :</td>
                            <td>{this.props.adresseHotel}</td>
                        </tr>
                        <tr>
                            <td>Ville :</td>
                            <td>{this.props.Ville}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Button color="danger">Annuler</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </ListGroupItem >

        );
    }
}
