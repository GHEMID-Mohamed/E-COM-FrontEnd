import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import FormSearch from '../components/FormSearch'
import CardChambre from '../components/CardChambre'
import '../components/BodyHome.css'
import bodyImg from '../Images/mapFR.png'
import nice from '../Images/nice.png'
import ChambreDispo from '../components/ChambreDispo'
import SimpleSlider from '../components/SlideShow'


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
                    <Col>
                        <p>
                            <strong>Il y a toujours un hôtel Pyramide près de vous  !</strong>
                        </p>

                    </Col>
                    <hr className="my-2" />
                </Row>
                <Row>
                    <Col md="6">
                        <FormSearch goListenToButtonSearchProp={this.goListenToButtonSearch}></FormSearch>
                    </Col>
                    <Col md="6">
                        <SimpleSlider></SimpleSlider>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <img src={bodyImg} alt="Map" height="300" width="280" />
                    </Col>
                    <Col><img src={nice} alt="Map" /></Col>
                </Row>
                <hr />


            </div>
        );
    }
}

