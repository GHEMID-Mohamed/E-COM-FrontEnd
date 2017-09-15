import React, { Component } from 'react';
import {
    Form, FormGroup,
    Input, Button, FormText, Label, Container, Row, Col,
    InputGroup, InputGroupAddon
} from 'reactstrap';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class ContacterNousPage extends Component {

  
    render() {
        return (

            <div>
                <Container>
                    <Header></Header>
                    <hr />
                    <Row>
                        <Col md="8">
                            <Form tag="fieldset">
                                <legend>Nous Contacter</legend>
                                <FormGroup>
                                    <Label for="name">Nom: </Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Nom" />
                                </FormGroup>
                                <br />
                                <FormGroup>
                                    <Label for="email">Email: </Label>
                                    <InputGroup>
                                    <InputGroupAddon>@</InputGroupAddon>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="@example.example" />
                                    </InputGroup>
                                </FormGroup>
                                <br />
                                <FormGroup>
                                    <Label for="select">Sujet: </Label>
                                    <Input type="select" name="select" id="select">
                                        <option>Choisissez un</option>
                                        <option>Réservation</option>
                                        <option>Paiment</option>
                                        <option>Confirmation réservation</option>
                                        <option>Compte</option>
                                        <option>Autre</option>
                                    </Input>
                                </FormGroup>
                                <br />
                                <FormGroup>
                                    <Label for="text">Message: </Label>
                                    <Input type="textarea" name="text" id="text" />
                                </FormGroup>
                                <br />
                                <Button color="primary">Envoyer</Button>

                            </Form>
                        </Col>
                    </Row>

                </Container>
                <hr />
                <Footer></Footer>
            </div>
        );
    }
}



