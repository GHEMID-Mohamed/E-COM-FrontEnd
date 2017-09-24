import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import FormSearch from '../components/FormSearch'
import CardChambre from '../components/CardChambre'
import '../components/BodyHome.css'
import bodyImg from '../Images/mapFR.png'
import ChambreDispo from '../components/ChambreDispo'


export default class Body extends Component {

    constructor(props) {
        super(props)
        
        this.goListenToButtonSearch = this.goListenToButtonSearch.bind(this)
    }

    goListenToButtonSearch(state, data) {
        console.log('fromBodyHome')
        this.props.goListenToButtonSearchProp(state, data)
    }

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
                                <FormSearch goListenToButtonSearchProp={this.goListenToButtonSearch}></FormSearch>
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

