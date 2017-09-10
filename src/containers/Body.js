import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import FormSearch from '../components/FormSearch'
import CardChambre from '../components/CardChambre'
import '../containers/Body.css'

export default class Body extends Component {
    render() {
        return (
            <div className="Body">
                <Row>
                    <Col>
                        <center>
                            <p>
                                <strong>Il y a toujours un hôtel Pyramide près de vous  !</strong>
                            </p>
                        </center>
                    </Col>
                    <hr className="my-2" />
                </Row>
                <Row>
                    <Col md="1"></Col>
                    <Col md="11" >  <FormSearch></FormSearch> </Col>
                </Row>
                <Row><Col md="12"><hr /></Col></Row>
                <Row>
                    <Col md="4">
                        <CardChambre
                            src="http://hotel-diana-paris.com/wp-content/uploads/2013/10/chambre-double-hotel-diana7.jpg"
                            nombreDeLit="1"
                            nombreDePersonne="2"
                        >
                        </CardChambre>
                    </Col>
                    <Col md="4">
                        <CardChambre src="http://www.martigues-hotel.com/en/files/2012/11/chambre-double-twin.jpg"
                            nombreDeLit="2"
                            nombreDePersonne="2"
                        >
                        </CardChambre>
                    </Col>
                    <Col md="4">
                        <CardChambre src="https://media-cdn.tripadvisor.com/media/photo-s/02/8a/15/29/chambre-triple.jpg"
                            nombreDeLit="3"
                            nombreDePersonne="3"
                        ></CardChambre>
                    </Col>
                </Row>
            </div>
        );
    }
}

