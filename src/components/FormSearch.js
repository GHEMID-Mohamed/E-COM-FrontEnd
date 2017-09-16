import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import DatePickerDepart from '../components/DatePickerDepart'
import DatePickerArrive from '../components/DatePickerArrive'
import InputDestination from '../components/InputDestination'
import '../components/SearchIcon.css'
import '../components/FormSearch.css'

export default class FormSearch extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dateArrive: '',
            dateDepart: '',
        }
    }

    getDateArrive(date) {
        this.setState({ dateArrive: date })
    }

    getDateDepart(date) {
        this.setState({ dateDepart: date })
    }

    render() {
        return (
            <div>

                <Form inline>
                    <Row>
                        <Col md={{size: 12, offset: 2}}>
                            <Row>
                                <Col md="4">
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <InputDestination></InputDestination>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    {' '}
                                </Col>
                                <Col md={{ size: 4, offset: 0 }}>
                                    <FormGroup>

                                        <DatePickerArrive goGetDateArrive={this.getDateArrive} ></DatePickerArrive>

                                    </FormGroup>
                                    {' '}
                                </Col>
                                <Col md={{ size: 4, offset: 0 }}>
                                    <FormGroup>

                                        <DatePickerDepart goGetDateDepart={this.getDateDepart} ></DatePickerDepart>

                                    </FormGroup>
                                    {' '}
                                </Col>
                            </Row>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="3">
                                    <FormGroup>
                                        <Input type="select" name="NbrPersonne" id="NbrPersonne">
                                            <option>0 adulte</option>
                                            <option>1 adulte</option>
                                            <option>2 adultes</option>
                                            <option>3 adultes</option>
                                            <option>4 adultes</option>
                                            <option>5 adultes</option>
                                        </Input>
                                    </FormGroup> {' '}
                                </Col>
                                <Col md="3">
                                    <FormGroup>
                                        <Input type="select" name="NbrPersonne" id="NbrPersonne">
                                            <option>0 enfant</option>
                                            <option>1 enfant</option>
                                            <option>2 enfants</option>
                                            <option>3 enfants</option>
                                            <option>4 enfants</option>
                                            <option>5 enfants</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="3">
                                    <FormGroup>
                                        <Input type="select" name="NbrPersonne" id="NbrPersonne">
                                            <option>1 chambre</option>
                                            <option>2 chambres</option>
                                            <option>3 chambres</option>
                                            <option>4 chambres</option>
                                            <option>5 chambres</option>
                                        </Input>
                                    </FormGroup>
                                </Col>

                                <Col md="2">
                                    <Link to="/resultat">
                                        <Button color="danger" size="md">

                                            <img src="http://www.vincentdeplais.fr/siteAlummi/images/menu-search.png" height="20" width="20" />

                                        </Button>{' '}
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>

            </div>
        );
    }
}

