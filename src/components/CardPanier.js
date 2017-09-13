import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Jumbotron, Col, Row, Alert
} from 'reactstrap';
import Sticky from 'react-sticky-el'




export default class CardPanier extends Component {

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
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            prix: nextProps.prix,
            nomHotel: nextProps.nomHotel,
            adressHotel: nextProps.adressHotel,
            nbrAdulte: nextProps.nbrAdulte,
            nbrEnfant: nextProps.nbrEnfant,
            nbrChambre: nextProps.nbrChambre,
            nbrLit: nextProps.nbrLit
        })

        console.log(nextProps.nbrEnfant)


    }


    render() {


        return (

            <Sticky>
                <div className="CardPanier">

                    <Card>
                        <CardBlock>
                            <CardTitle>Votre reservation </CardTitle>

                            <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                                <Row>
                                    <Col><h5>{this.state.nomHotel}</h5></Col>
                                </Row>
                                <Row>
                                    <Col md="2"><img src="http://www.freeiconspng.com/uploads/red-location-icon-1.png"
                                        height="30" width="20" /></Col>
                                    <Col md="10"><h6>{this.state.adressHotel}</h6></Col>
                                </Row>
                                <Row>
                                    <Col><h7>{this.state.nbrAdulte} adulte(s)</h7></Col>
                                </Row>
                                <Row>
                                    <Col><h7>{this.state.nbrEnfant} enfant(s)</h7></Col>
                                </Row>
                                <Row>
                                    <Col><h7>{this.state.nbrChambre} chambre(s)</h7></Col>
                                </Row>
                            </Alert>
                            <CardText>
                                <Row>
                                    <Col>
                                        <p>Totale </p><h3><strong> {this.state.prix} € </strong></h3>
                                    </Col>
                                </Row>
                            </CardText>

                            <Button color="success"><strong>Réserver !</strong></Button>
                            <img src="https://image.freepik.com/icones-gratuites/panier-2_318-11553.jpg"
                                height="30" width="30" />
                        </CardBlock>
                    </Card>

                </div>
            </Sticky>

        )
    }

}
