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
            idChambre: this.props.idChambre,
            visible: true
        }

        this.onDismiss = this.onDismiss.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    onDismiss() {
        this.setState({ visible: false });
        this.props.listenElement(this.state.prix)
    }

    handleClick() {
        this.props.ListenButtonReserver(this.props.prix, this.props.nomHotel, this.props.adressHotel, this.props.nbrAdulte, this.props.nbrEnfant, this.props.nbrChambre, this.props.nbrLit, this.props.idChambre)
        console.log(this.props.idChambre+' from Panier Element')
    }




    render() {


        return (

                <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                    <Row>
                        <Col><h6>{this.state.nomHotel}</h6></Col>
                    </Row>
                    <Row>
                        <Col md="2"><img src="http://www.freeiconspng.com/uploads/red-location-icon-1.png"
                            height="15" width="10" />
                        </Col>
                        <Col md="10">
                            <h7><p className="adresseHotel">{this.state.adressHotel}</p></h7>
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
                        <Col md="5">
                            <Button color="success" onClick={this.handleClick}>
                                <strong>Réserver !</strong>
                            </Button></Col>

                    </Row>
                </Alert>
        )
    }

}
