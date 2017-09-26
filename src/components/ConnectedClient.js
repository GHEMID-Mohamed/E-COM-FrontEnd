import React, { Component } from 'react';
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col,
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    ListGroup, ListGroupItem
} from 'reactstrap'
import { Link } from 'react-router-dom'
import Reservation from '../components/MesReservation'

export default class ConnectedClient extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            modal: false,
            data: '',
            message: ''
        };

        this.handleClick = this.handleClick.bind(this)
        this.toggle = this.toggle.bind(this);
        this.toggleDrop = this.toggleDrop.bind(this)

    }

    toggleDrop() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });

        const details = {
            'token': this.props.token,
        }

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&')

        fetch('http://152.77.78.16:8080/HotelBookersWeb/wish/wishOfClient/', {

            method: 'POST',
            headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        }).then(result => {
            return result.json()
        }).then(data => {
            if (data.code == '201') {
                this.setState({
                    data: data.resultat.valeur
                })
            }
            else {
                this.setState({
                    message: "Aucune reservation n'a été trouvée"
                })
            }
            //console.log(data)
        }).catch((error) => {
            console.error(error);
        });
    }

    handleClick() {
        this.props.listenToDeconnexionProp()
    }



    render() {
        if (this.state.data != '') {
            var listeReservation = this.state.data.map((element) => 
                <Reservation
                    dateDebut={element.dateDeb}
                    dateFin={element.dateFin}
                    numChambre={element.chambreModel.numero}
                    prix={element.chambreModel.prix}
                    nomHotel={element.chambreModel.hotel.nom}
                    adresseHotel={element.chambreModel.hotel.adresse}
                    Ville={element.chambreModel.hotel.ville}
                >
                </Reservation>
            )
        }


        return (
            <div>
                <Row>
                    <Col md="1">
                        <img src="http://wfarm1.dataknet.com/static/resources/icons/set113/91f685ca.png" height="30" width="30" />
                    </Col>
                    <Col md="3"><p> {this.props.nomProp} &nbsp; {this.props.prenomProp}</p></Col>
                    <Col md="8">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDrop} >
                            <DropdownToggle caret>
                                <img src="http://www.freeiconspng.com/uploads/menu-icon-13.png"
                                    height="20" width="20" />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Paramètres</DropdownItem>
                                <DropdownItem onClick={this.toggle}>Mes reservations</DropdownItem>
                                <DropdownItem onClick={this.handleClick}>Déconnecter</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                       
                    </Col>
                </Row>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Mes reservations</ModalHeader>
                            <ModalBody>
                                {this.state.message}
                                <ListGroup>
                                    {listeReservation}
                                </ListGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle}>Annuler</Button>
                            </ModalFooter>
                        </Modal>
            </div>
        );
    }
}

