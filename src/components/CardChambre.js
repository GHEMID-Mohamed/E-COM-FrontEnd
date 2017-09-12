import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Input, Row, Col, Alert
} from 'reactstrap';

export default class CardChambre extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src={this.props.src} alt="Chambre" />
                    <CardBlock>
                        <CardTitle>
                            <Row>
                                <Col>
                                    Nombre d'adultes {this.props.nombreDadulte}
                                </Col>
                            </Row>
                        </CardTitle>
                        <CardSubtitle>{this.props.nombreDeLit} lit</CardSubtitle>
                        <br />
                        <CardText>

                            <Alert color="danger">
                                Tarif pour 2 adultes et 2 enfants pour 1 nuit: <strong>€ 133</strong>
                            </Alert>

                            <br />
                            <Row>
                                <Col>
                                    <label> Chambres </label>
                                </Col>
                                <Col>
                                    <Input type="select" name="NbrPersonne" id="NbrPersonne">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                    </Input>
                                </Col>
                            </Row>
                            <strong>{this.props.prix}</strong></CardText>
                        <Button color="danger">
                            <img src="https://www.dmanetwork.com/share/dma/gfx/icon-add-grey.png"
                                height="20" width="20" />
                            Ajouter au panier
                            </Button>
                    </CardBlock>
                </Card>
            </div>
        )
    }

}
