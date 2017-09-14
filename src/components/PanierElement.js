import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Jumbotron, Col, Row, Alert, Badge
} from 'reactstrap';
import Sticky from 'react-sticky-el'
import './PanierElement.css'




export default class PanierElement extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            prix: this.props.prix,
            nomHotel: this.props.nomHotel,
            adressHotel: this.props.adressHotel,
            nbrAdulte: this.props.nbrAdulte,
            nbrEnfant: this.props.nbrEnfant,
            nbrChambre: this.props.nbrChambre,
            nbrLit: this.props.nbrLit,
            visible: true
        }

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({ visible: false });
        this.props.listenElement()
    }


    render() {


        return (

            <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                            <Row>
                                <Col><h6>{this.state.nomHotel}</h6></Col>
                            </Row>
                            <Row>
                                <Col md="1"><img src="http://www.freeiconspng.com/uploads/red-location-icon-1.png"
                                    height="15" width="10" /></Col>
                                <Col md="9">
                                    <h7>{this.state.adressHotel}</h7>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="3"><p>{this.state.nbrAdulte} adulte(s)</p></Col>
                                <Col md="3"><p>{this.state.nbrEnfant} enfant(s)</p></Col>
                                <Col md="3"><p>{this.state.nbrChambre} chambre(s)</p></Col>
                                <Col md="3">
                                    <h3><Badge color="danger">
                                        <strong>€ {this.props.prix}</strong>
                                    </Badge>{' '}</h3>
                                </Col>
                            </Row>
                            <Row>

                                <Col md="7"></Col>
                                <Col md="5"><Button color="success"><strong>Réserver !</strong></Button></Col>

                            </Row>
            </Alert>

        )
    }

}
