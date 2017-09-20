import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import FormSearch from '../components/FormSearch'
import CardChambre from '../components/CardChambre'
import '../components/BodyHome.css'
import bodyImg from '../Images/mapFR.png'


export default class Body extends Component {
    render() {
        return (
            <div className="Body">
                <Row>
                    <Col md={{ size: 12, offset: 3 }}>
                        <Row>
                            <Col>
                                <p>
                                    <strong>Il y a toujours un hôtel Pyramide près de vous  !</strong>
                                </p>

                            </Col>
                            <hr className="my-2" />
                        </Row>
                        <Row>
                            <Col>
                                <FormSearch></FormSearch>
                            </Col>
                            <Col>
                                <img src={bodyImg} alt="Map" height="300" width="280" />
                            </Col>
                        </Row>
                        <hr />
                    </Col>
                </Row>

            </div>
        );
    }
}

