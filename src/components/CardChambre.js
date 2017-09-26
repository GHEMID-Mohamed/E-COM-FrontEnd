import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Input, Row, Col, Alert, Badge,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import '../components/CardChambre.css'


export default class CardChambre extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modal: false
        };


        this.handleClickAjouter = this.handleClickAjouter.bind(this)
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }



    handleClickAjouter(event) {
        //console.log(event)
        this.props.listenButton(event, this.props.prix, this.props.nomHotel, this.props.adresseHotel, this.props.nombreDadultes, this.props.nombreEnfants, this.props.nombreChambres, this.props.nombreLits, this.props.idChambre)
        console.log(this.props.idChambre+' from Card Chambre')
    }


    render() {
        return (
            <div>
                <Card>
                    <div class="container">
                        <div className="imgChambre">
                            <CardImg onClick={this.toggle}
                                top width="100%" src={this.props.srcProp} alt="Chambre"
                            />
                        </div>
                        <div className="overlay">
                            <div className="text">Cliquez pour zoomer</div>
                        </div>
                    </div>
                    <CardBlock>
                        <CardTitle>
                            <Row>
                                <Col md="9">
                                    {this.props.nomHotel}
                                </Col>
                                <Col md="3  ">
                                    <Badge color="info" pill>
                                        <strong>Hotel</strong>
                                    </Badge>{' '}
                                </Col>
                            </Row>

                        </CardTitle>
                        <CardSubtitle>

                            <br />
                            <Row>
                                <Col><p>Adresse : </p></Col>
                                <Col><p>{this.props.adresseHotel}</p></Col>
                                <Col><p>Nombre de lits : </p></Col>
                                <Col><p>{this.props.nombreLits}</p></Col>
                            </Row>

                            <br />
                        </CardSubtitle>




                        <CardText>

                            <Row>
                                <Col md="3">Prix :</Col>
                                <Col>
                                    <h3><Badge color="primary" pill>
                                        <strong>€ {this.props.prix}</strong>
                                    </Badge>{' '}</h3>
                                </Col>
                            </Row>

                        </CardText>
                        <Row>
                            <Col>
                                <Button color="danger" onClick={this.handleClickAjouter}>
                                    <img src="https://www.dmanetwork.com/share/dma/gfx/icon-add-grey.png"
                                        height="20" width="20" />
                                    Ajouter à ma liste pour la <strong>réserver</strong>
                                </Button>
                            </Col>
                        </Row>
                    </CardBlock>
                </Card>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Photo Chambre</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>
                        <img src={this.props.src} height="300" width="380" />
                        <Button color="secondary" onClick={this.toggle}>Quitter</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }

}
