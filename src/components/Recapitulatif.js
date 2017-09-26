import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Input, Row, Col, Alert, Badge
} from 'reactstrap'
import CardChambre from '../components/CardChambre'

export default class Recapitulatif extends Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handleClickBack = this.handleClickBack.bind(this)
    }

    handleClick() {
        this.props.listenPayerButtonProp(this.props.idChambreProp)
    }

    handleClickBack() {
        this.props.listenBackButtonProp()
    }

    render() {
        return (
            <div>
                <br />
                <Row>
                    <Col><img height="150" width="150" src={this.props.src} alt="Chambre" /></Col>


                    <Col>

                        <h4>{this.props.nomHotel} &nbsp;</h4>
                        <Badge color="info" pill>
                            <strong>Hotel</strong>
                        </Badge>{' '}

                    </Col>
                    <br />

                    <Col>
                        Adresse :

                                 <p>{this.props.adressHotel}</p>
                    </Col>

                    <br />

                    

                    <br />
                    <Col>
                        Nombre de lits :
                        <p>{this.props.nbrLit}</p>
                    </Col>
                    <br />



                    <Col>
                        Prix :

                <h3><Badge color="primary" pill>
                            <strong>€ {this.props.prix}</strong>
                        </Badge>{' '}</h3>

                    </Col>

                </Row>

                <Row>
                    <Col md="6"></Col>
                    <Col md="4">
                        <Button color="socondary" onClick={this.handleClickBack}>
                            <Row>
                                <Col md="1">
                                </Col>
                                <img src="https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Undo_arrow_left_edit_back_cancel_rotate_delete.png"
                                    height="20" width="20" />
                                <Col>Choisir une autre chambre</Col>
                            </Row>
                        </Button >
                    </Col>
                    <Col md="2">
                        <Button color="success" onClick={this.handleClick}>
                            <Row>
                                <Col md="1">
                                </Col>
                                <img src="https://icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png"
                                    height="20" width="20" />
                                <Col>Payer</Col>
                            </Row>
                        </Button >
                    </Col>
                </Row>
            </div >
        );
    }
}

