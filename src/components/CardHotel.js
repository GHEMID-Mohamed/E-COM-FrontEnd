import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Input, Row, Col, Alert, Badge,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import '../components/CardChambre.css'


export default class CardHotel extends Component {


    render() {
        return (
            <div>
                <Card>
                    <div class="container">
                        <div className="imgChambre">
                            <CardImg onClick={this.toggle}
                                top width="100" height="100"
                                src="https://www.myrtlebeachspeedway.com/wp-content/uploads/2015/09/hotel-icon.png" alt="Chambre"
                            />
                        </div>
                        <div className="overlay">
                            <div className="text">Cliquez pour zoomer</div>
                        </div>
                    </div>
                    <CardBlock>
                        <CardTitle>
                            <Row>
                                <Col md="8">
                                    {this.props.nomHotel}
                                </Col>
                                <Col md="2">
                                    <Badge color="info" pill>
                                        <strong>Hotel</strong>
                                    </Badge>{' '}
                                </Col>
                            </Row>

                        </CardTitle>
                        <CardSubtitle>

                            <br />
                            <Row>
                                <Col><p>{this.props.nbrEtoileHotel} étoiles</p></Col>
                            </Row>
                            <br />

                            {/*<Row>
                                <Col>
                                    Nombre de chambres
                                </Col>
                                <Col>
                                    <p>{this.props.nombreChambres}</p>
                                </Col>
                            </Row>
                            <br />*/}

                            <Row>
                                <Col><p>Adresse : </p></Col>
                                <Col><p>{this.props.adresseHotel}</p></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Ville :</p>
                                </Col>
                                <Col>
                                    <p>{this.props.VilleHotel}</p>
                                </Col>
                                </Row>
                                <Row>
                                <Col>
                                    <p>Région hotel :</p>
                                </Col>
                                <Col>
                                    <p>{this.props.regionHotel}</p>
                                </Col>
                            </Row>
                            <br />
                        </CardSubtitle>




                        <CardText>

                            <Row>
                                <Col md="6">Code postal :</Col>
                                <Col>
                                    <h3><Badge color="success" pill>
                                        <strong>{this.props.codePostalHotel}</strong>
                                    </Badge>{' '}</h3>
                                </Col>
                            </Row>

                        </CardText>
                    </CardBlock>
                </Card>

            </div >
        )
    }

}
