import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Input, Row, Col, Alert, Badge
} from 'reactstrap'
import CardChambre from '../components/CardChambre'

export default class Recapitulatif extends Component {
    render() {
        return (
            <div>
                <br />
                <Row>
                    <Col><img height="130" width="200" src={this.props.src} alt="Chambre" /></Col>


                    <Col>

                        {this.props.nomHotel}
                        <Badge color="info" pill>
                            <strong>Hotel</strong>
                        </Badge>{' '}

                    </Col>
                    <br />

                    <Col>
                        Adresse :

                                 <p>{this.props.adresseHotel}</p>
                    </Col>

                    <br />

                    <Col>
                        Nombre de chambres

                                    <p>{this.props.nombreChambres}</p>
                    </Col>

                    <br />
                    <Col>
                        Nombre de lits :
                        <p>{this.props.nombreLits}</p>
                    </Col>
                    <br />


                    <Col>
                        Nombre d'adultes


                <p>{this.props.nombreDadultes}</p>

                    </Col>
                    <br />

                    <Col>
                        Nombre d'enfants


                <p>{this.props.nombreEnfants}</p>

                    </Col>

                <Col>
                    Prix :

                <h3><Badge color="primary" pill>
                        <strong>€ {this.props.prix}</strong>
                    </Badge>{' '}</h3>

                </Col>
                <Col>
                    <Button color="success">
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

