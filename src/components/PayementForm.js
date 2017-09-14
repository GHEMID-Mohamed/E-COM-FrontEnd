import React, { Component } from 'react';
import {
    Button, Form, FormGroup, Label, Input, FormText,
    Col, Row
} from 'reactstrap';



export default class PayementForm extends Component {
    render() {
        return (
            <div>
                <hr />
                Payement
                <hr />
                <Row>

                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Nom du détenteur de carte</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Numéro de la carte</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Label for="exampleSelect">Date d'expiration</Label>
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option></option>
                                            <option value="01">Jan (01)</option>
                                            <option value="02">Feb (02)</option>
                                            <option value="03">Mar (03)</option>
                                            <option value="04">Apr (04)</option>
                                            <option value="05">May (05)</option>
                                            <option value="06">June (06)</option>
                                            <option value="07">July (07)</option>
                                            <option value="08">Aug (08)</option>
                                            <option value="09">Sep (09)</option>
                                            <option value="10">Oct (10)</option>
                                            <option value="11">Nov (11)</option>
                                            <option value="12">Dec (12)</option>
                                        </Input>
                                    </Col>
                                    <Col>
                                        <Label for="exampleSelect">Année</Label>
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option value="13">2013</option>
                                            <option value="14">2014</option>
                                            <option value="15">2015</option>
                                            <option value="16">2016</option>
                                            <option value="17">2017</option>
                                            <option value="18">2018</option>
                                            <option value="19">2019</option>
                                            <option value="20">2020</option>
                                            <option value="21">2021</option>
                                            <option value="22">2022</option>
                                            <option value="23">2023</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleEmail">CVV de la carte</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>

                            <Button color="success">Payer</Button>

                        </Form>
                    </Col>
                    <Col md="4"></Col>
                </Row>
            </div>
        );
    }
}

