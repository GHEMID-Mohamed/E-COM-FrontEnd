import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom'



export default class FormPassOublier extends React.Component {
    render() {
        return (
            <div>

                <hr />
                <h4><strong>Mot de passe oublier</strong></h4>
                <hr />
                <Row>
                    <Col md="7">
                        <Jumbotron>
                            <h4>Entrez votre adresse email</h4>
                            <hr />
                            <Form>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleEmail" hidden>Email</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="Entrez votre adresse email" />
                                        </FormGroup>
                                        {' '}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="3"></Col>
                                    <Col md="3"></Col>
                                    <Col md="3"></Col>
                                    <Col md="3">
                                        <Button color="danger">Connexion</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        );
    }
}